import { useState, useEffect, FormEvent } from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation"
import {Button} from "@/ui/button";

interface ButtonProps {
  children: string;
  color: string;
  disabled: boolean;
}

export default function CustomizeButton() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [routeParams] = useState(new URLSearchParams(searchParams.toString()))
  const [buttonProps, setButtonProps] = useState<ButtonProps>({
    children: 'Button Text',
    color: '#0000ff', // 使用合法的默认颜色值
    disabled: false,
  });
  const [hideEdit, setHideEdit] = useState(false);

  // 解析 URL 参数并设置为初始按钮属性
  useEffect(() => {
    const queryProps: Partial<ButtonProps> = { ...buttonProps };
    Object.keys(routeParams).forEach((key) => {
      const value = routeParams[key];
      switch (key) {
        case 'disabled':
          queryProps[key] = value === 'true';
          break;
        default:
          if (typeof value === 'string') {
            queryProps[key as keyof ButtonProps] = value;
          }
          break;
      }
    });
    setButtonProps(queryProps as ButtonProps);
    setHideEdit(routeParams.get("use") === '1');
  }, [routeParams]);

  const updateProps = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProps: Partial<ButtonProps> = {};
    const form = e.currentTarget;
    Array.from(form.elements).forEach((element) => {
      const input = element as HTMLInputElement;
      if (input.name) {
        if (input.type === 'checkbox') {
          newProps[input.name as keyof ButtonProps] = input.checked;
        } else {
          newProps[input.name as keyof ButtonProps] = input.value;
        }
      }
    });
    setButtonProps(newProps as ButtonProps);
  };

  const copyToClipboard = () => {
    const params = new URLSearchParams();
    Object.entries(buttonProps).forEach(([key, value]) => {
      params.append(key, value.toString());
    });
    params.append('use', '1'); // 添加 use=1 表示实际使用的场景
    navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}?${params.toString()}`)
      .then(() => alert('Configuration URL copied to clipboard!'))
      .catch((err) => console.error('Could not copy to clipboard', err));
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {!hideEdit && (
        <div style={{ flex: 1 }}>
          <form onSubmit={updateProps}>
            <label>
              Text:
              <input
                type="text"
                name="children"
                defaultValue={buttonProps.children}
              />
            </label>
            <br />
            <label>
              Color:
              <input type="color" name="color" defaultValue={buttonProps.color} />
            </label>
            <br />
            <label>
              Disabled:
              <input type="checkbox" name="disabled" defaultChecked={buttonProps.disabled} />
            </label>
            <br />
            <button type="submit">Update Preview</button>
          </form>
          <button onClick={copyToClipboard}>Copy Config URL</button>
        </div>
      )}

      <div style={{ flex: 1 }}>
        <h2>Preview</h2>
        <Button {...buttonProps}>{buttonProps.children}</Button>
      </div>
    </div>
  );
}
