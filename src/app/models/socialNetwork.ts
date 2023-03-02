export interface ISocialNetwork {
  code: CodeSocialNetworkEnum;
  name: string;
  url: string;
  display: boolean;
}

export enum CodeSocialNetworkEnum {
  FB,
  IS,
  LK,
  GH,
  BI,
}
