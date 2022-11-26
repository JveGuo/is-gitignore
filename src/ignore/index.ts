/**
 * @Author: jiawei.guo
 * @Date: 2022-11-26 16:45:12
 * @Description: is ignore
 */
import { readFileSync, pathExistsSync } from "fs-extra";
import { red } from "chalk";
import { IgnoreProps } from "../types/index";
import * as path from "path";

const ignore = ({ folderPath }: IgnoreProps) => {
  const ignorePathList: string[] = [];

  // 判断是不是忽略的文件
  const isIgnore: (filePath: string) => boolean = (filePath: string) => {
    try {
      if (!filePath || typeof filePath !== "string") {
        throw new Error("function isIgnore parameter is invalid.");
      }

      // 要判断的文件路径
      const findFilePath = path.resolve(folderPath, `./${filePath}`);

      // 判断传入文件夹是否存在
      const ignorePathExist = pathExistsSync(findFilePath);

      if (!ignorePathExist) {
        throw new Error(`${filePath} file does not exist.`);
      }

      return ignorePathList.some((item) => findFilePath.indexOf(item) > -1);
    } catch (error) {
      console.log(red(`✘ ${(error as Error).message}`));
      return false;
    }
  };

  try {
    if (!folderPath || typeof folderPath !== "string") {
      throw new Error("folderPath is invalid.");
    }

    // 判断传入文件夹是否存在
    const pathExist = pathExistsSync(folderPath);

    if (!pathExist) {
      throw new Error("The folder path does not exist.");
    }

    // .gitignore 文件路径
    const ignorePath = path.join(folderPath, ".gitignore");

    // 判断传入文件夹是否存在
    const ignorePathExist = pathExistsSync(ignorePath);

    if (!ignorePathExist) {
      throw new Error("'.gitignore' file does not exist.");
    }

    // 读取 .gitignore 文件数据
    const ignoreFile = readFileSync(ignorePath, "utf-8");

    // .gitignore 要忽略的数组
    const ignoreArr = ignoreFile?.split(/\r?\n|\r/);

    console.log(ignoreArr);

    for (const item of ignoreArr) {
      ignorePathList.push(path.resolve(folderPath, `./${item}`));
    }

    return {
      ignorePathList,
      isIgnore,
    };
  } catch (error) {
    console.log(red(`✘ ${(error as Error).message}`));
  }
};

export default ignore;
