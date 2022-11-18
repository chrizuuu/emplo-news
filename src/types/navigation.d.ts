export type RootStackParamList = {
  Login: undefined;
  News: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
