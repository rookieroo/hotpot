interface StorageData<T = unknown> {
  data: T
  expire: number | null
}

export function createLocalStorage(options?: { expire?: number | null }) {
  const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

  const { expire } = Object.assign({ expire: DEFAULT_CACHE_TIME }, options)

  function set<T = unknown>(key: string, data: T) {
    const storageData: StorageData<T> = {
      data,
      expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
    }

    const json = JSON.stringify(storageData)
    window.localStorage.setItem(key, json)
  }

  const asyncGet = async (key: string) => {
    return new Promise((resolve, reject) => {
      const json = window.localStorage.getItem(key)
      if (json) {
        let storageData: StorageData | null = null

        try {
          storageData = JSON.parse(json)
        }
        catch {
          // Prevent failure
        }

        if (storageData) {
          resolve(storageData)
        }

        remove(key)
        resolve(null)
      } else {
        resolve(null)
      }
    });

  }

  function get(key: string) {
    const json = window.localStorage.getItem(key)
    if (json) {
      let storageData: StorageData | null = null

      try {
        storageData = JSON.parse(json)
      }
      catch {
        // Prevent failure
      }

      if (storageData) {
        const { data, expire } = storageData
        if (expire === null || expire >= Date.now())
          return data
      }

      remove(key)
      return null
    }
  }

  function remove(key: string) {
    window.localStorage.removeItem(key)
  }

  function clear() {
    window.localStorage.clear()
  }

  return { set, get, remove, clear, asyncGet }
}

export const ls = createLocalStorage()

export const ss = createLocalStorage({ expire: null })
