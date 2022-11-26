var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ignore/index.ts
var ignore_exports = {};
__export(ignore_exports, {
  default: () => ignore_default
});
module.exports = __toCommonJS(ignore_exports);
var import_fs_extra = require("fs-extra");
var import_chalk = require("chalk");
var path = __toESM(require("path"));
var ignore = ({ folderPath }) => {
  const ignorePathList = [];
  const isIgnore = (filePath) => {
    try {
      if (!filePath || typeof filePath !== "string") {
        throw new Error("function isIgnore parameter is invalid.");
      }
      const findFilePath = path.resolve(folderPath, `./${filePath}`);
      const ignorePathExist = (0, import_fs_extra.pathExistsSync)(findFilePath);
      if (!ignorePathExist) {
        throw new Error(`${filePath} file does not exist.`);
      }
      return ignorePathList.some((item) => findFilePath.indexOf(item) > -1);
    } catch (error) {
      console.log((0, import_chalk.red)(`\u2718 ${error.message}`));
      return false;
    }
  };
  try {
    if (!folderPath || typeof folderPath !== "string") {
      throw new Error("folderPath is invalid.");
    }
    const pathExist = (0, import_fs_extra.pathExistsSync)(folderPath);
    if (!pathExist) {
      throw new Error("The folder path does not exist.");
    }
    const ignorePath = path.join(folderPath, ".gitignore");
    const ignorePathExist = (0, import_fs_extra.pathExistsSync)(ignorePath);
    if (!ignorePathExist) {
      throw new Error("'.gitignore' file does not exist.");
    }
    const ignoreFile = (0, import_fs_extra.readFileSync)(ignorePath, "utf-8");
    const ignoreArr = ignoreFile == null ? void 0 : ignoreFile.split(/\r?\n|\r/);
    console.log(ignoreArr);
    for (const item of ignoreArr) {
      ignorePathList.push(path.resolve(folderPath, `./${item}`));
    }
    return {
      ignorePathList,
      isIgnore
    };
  } catch (error) {
    console.log((0, import_chalk.red)(`\u2718 ${error.message}`));
  }
};
var ignore_default = ignore;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=index.js.map
