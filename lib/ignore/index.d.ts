import { IgnoreProps } from "../types/index";
declare const ignore: ({ folderPath }: IgnoreProps) => {
    ignorePathList: string[];
    isIgnore: (filePath: string) => boolean;
} | undefined;
export default ignore;
