/**
 * 新增文件时，如果没有指定新名称，则按照规则生成一个名字。
 * 如：当前存在 Table1,  新增时，则自动计算并生成 Table2
 *
 * database 级别
 */
export type NameService = {
  setCurrentNames: (names: string[]) => void;
  generateName: () => string;
  isNameValid: (name: string) => boolean;
};

export type CreateNameServiceOption = {
  prefix: string;
  names: string[];
};
const createNameService = (option: CreateNameServiceOption): NameService => {
  const prefix = option.prefix;
  let names: string[] = option.names ?? [];

  const service: NameService = {
    setCurrentNames: (newNames: string[]) => {
      names = [...newNames];
    },
    generateName: () => {
      return generateName(names, prefix);
    },
    isNameValid: (name: string) => {
      return names.includes(name);
    },
  };

  return service;
};

const taskUtilEmpty = (nums: number[]): number => {
  for (let i = 1; ; i++) {
    if (nums.includes(i)) {
      continue;
    } else {
      return i;
    }
  }
};

const generateName = (names: string[], prefix: string) => {
  const namesWithPrefix = names.filter((name) => name.startsWith(prefix));
  const matchedNumbers = namesWithPrefix
    .map((name) => name.replace(prefix, ""))
    .map(Number)
    .filter((num) => !isNaN(num))
    .sort((a, b) => a - b);
  return `${prefix}${taskUtilEmpty(matchedNumbers)}`;
};
