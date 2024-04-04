'use client'

import {Card, CardContent, CardHeader, CardTitle} from "@/ui/card";
import {CheckIcon, CopyIcon, InfoCircledIcon, ResetIcon} from "@radix-ui/react-icons";
import {Button} from "@/ui/button";
import {Label} from "@/ui/label";
import {Popover, PopoverContent, PopoverTrigger} from "@/ui/popover";
import ColorPicker from "@/components/card-theme/colorPicker";
import {useTranslation} from "@/locales/client";
import React, {FormEvent, useEffect, useState} from "react";
import {compose_social, init_social, PLATFORMS, presetColors, SocialProps} from "@/components/widgets-diy/config";
import {Input} from "@/ui/input";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {SocialMenu} from "@/components/widgets-diy/social-menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

function NodCard() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [hideEdit, setHideEdit] = useState(false);
  const [hasCopied, setHasCopied] = useState(false)
  const [routeParams] = useState(new URLSearchParams(searchParams.toString()))
  const [social, setSocial] = useState<SocialProps>(init_social);
  const [socialList, setSocialList] = useState(compose_social);
  const {t} = useTranslation("settings");
  const {t: c} = useTranslation("settings", {keyPrefix: 'colors'});

  // 解析 URL 参数并设置为初始按钮属性
  useEffect(() => {
    const queryProps: Partial<SocialProps> = {...social};
    Object.keys(routeParams).forEach((key) => {
      const value = routeParams[key];
      switch (key) {
        case 'disabled':
          queryProps[key] = value === 'true';
          break;
        default:
          if (typeof value === 'string') {
            queryProps[key as keyof SocialProps] = value;
          }
          break;
      }
    });
    setSocial(queryProps as SocialProps);
    setHideEdit(routeParams.get("use") === '1');
  }, [routeParams]);

  const copyToClipboard = () => {
    const params = new URLSearchParams();
    Object.entries(social).forEach(([key, value]) => {
      params.append(key, value.toString());
    });
    params.append('use', '1'); // 添加 use=1 表示实际使用的场景
    navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}?${params.toString()}`)
      .then(() =>
        alert('Configuration URL copied to clipboard!'
        ))
      .catch((err) =>
        console.error('Could not copy to clipboard', err)
      );
  };

  const onSocialItemClick = (p) => {
    setSocial(p)
  }

  const onCheckedSocialChange = (v, p) => {
    const sl = socialList.map(s => {
      return {
        ...s,
        show: s === p ? v : s.show
      }
    })
    setSocialList(sl)
  }

  return (
    <div className="w-full h-screen p-8">
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
            <Card style={{boxShadow: "none",border: "none"}}>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2 flex justify-center">
                <div className="bg-muted sm:w-auto text-center rounded-2xl px-5 pb-5 shadow-xl">
                  <div className="w-28 h-28 bg-skin-primary rounded-full mx-auto -mt-14"/>
                  <div className="m-5">
                    <p className="m-2 font-extrabold text-3xl tracking-tight text-skin-primary">
                      {social.user_name}
                    </p>
                    <p className="m-2 font-medium text-xl text-gray-500">
                      {social.user_id || social.title}
                    </p>
                    <p className="m-2 font-light text-gray-400">
                      {social.desc}
                    </p>
                  </div>
                  <ul className="flex mt-5 sm:my-5 justify-center space-x-3">
                    {socialList.map((p, i) => (
                      p.show &&
                      <li key={i}>
                        <a
                          href={p.link}
                          target="_blank"
                          className="h-10 w-10 sm:h-12 sm:w-12 grid place-content-center rounded-lg border border-opacity-40 focus:ring-2 focus:ring-offset-2  bg-muted bg-opacity-30 text-primary hover:bg-opacity-100 hover:text-skin-a11y border-skin-primary focus:text-primary"
                          rel="noreferrer"
                        >
                          <p.icon className="h-5 w-5"/>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <Card style={{boxShadow: "none",border: "none"}}>
            <CardContent>
              <div className="flex flex-row space-y-1.5 pt-6">
                <div className="space-y-1 pr-2">
                  <div className="font-semibold leading-none tracking-tight">
                    {t("DIY")}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t("paint your social card")}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto rounded-[0.5rem]"
                  onClick={() => {
                    setSocial(init_social);
                    setSocialList(compose_social)
                  }}
                >
                  <ResetIcon/>
                  <span className="sr-only">{t('Reset')}</span>
                </Button>
              </div>
              <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
                <div className="space-y-1.5">
                  <div className="flex w-full items-center">
                    <Label className="text-xs">Buttons</Label>
                    <Popover>
                      <PopoverTrigger>
                        <InfoCircledIcon className="ml-1 h-3 w-3"/>
                        <span className="sr-only">About</span>
                      </PopoverTrigger>
                      <PopoverContent
                        className="space-y-3 rounded-[0.5rem] text-sm"
                        side="right"
                        align="start"
                        alignOffset={-20}
                      >
                        <p className="font-medium">
                          未设置颜色时跟随系统主题色，设置组件颜色会覆盖全局主题色
                        </p>
                        <p>

                        </p>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <ColorPicker
                      color={social.theme_color}
                      onChange={val =>
                        setSocial({
                          ...social,
                          theme_color: val
                        })
                      }
                      presetColors={presetColors}
                    />
                    <SocialMenu
                      social={social}
                      socialList={socialList}
                      onSocialItemClick={onSocialItemClick}
                      onCheckedSocialChange={onCheckedSocialChange}
                    />
                    <Button
                      variant="outline"
                      onClick={() => {
                        copyToClipboard();
                        setHasCopied(true);
                      }}
                    >
                      {hasCopied ? (
                        <CheckIcon className="mr-2 h-4 w-4"/>
                      ) : (
                        <CopyIcon className="mr-2 h-4 w-4"/>
                      )}
                      Copy
                    </Button>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">{t("Title")}</Label>
                  <div className="grid grid-cols-1 gap-2">
                    <Input
                      onChange={event =>
                        setSocial({
                          ...social,
                          title: event.target.value
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">{t("UserName")}</Label>
                  <div className="grid grid-cols-1 gap-2">
                    <Input
                      onChange={event =>
                        setSocial({
                          ...social,
                          user_name: event.target.value
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">{t("Desc")}</Label>
                  <div className="grid grid-cols-1 gap-2">
                    <Input
                      onChange={event =>
                        setSocial({
                          ...social,
                          desc: event.target.value
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">{t("Link")}</Label>
                  <div className="grid grid-cols-1 gap-2">
                    <Input
                      onChange={event =>
                        setSocial({
                          ...social,
                          link: event.target.value
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}


export default NodCard;
