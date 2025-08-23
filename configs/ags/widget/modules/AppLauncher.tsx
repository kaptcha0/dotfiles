import { exec } from "ags/process"

export default function AppLauncherModule() {
  const osInfo = exec(["cat", "/etc/os-release"])
  const infoMap = Object.assign(
    {},
    ...osInfo.split("\n").map((line) => {
      const [key, value] = line.split("=")
      return { [key]: value.replace(/"/g, "") }
    }),
  )

  return (
    <button>
      <image iconName={infoMap.LOGO} />
    </button>
  )
}
