import {HomePage, NftBoxPage, NftDetailPage, ProfilePage} from "../pages";

const appRoutes = {
  home: {
    path: '/',
    component: HomePage,
  },
  nftDetail: {
    path: '/nft-detail/:id',
    component: NftDetailPage,
  },
  nftBox: {
    path: '/nft-box',
    component: NftBoxPage,
  },
  profile: {
    path: '/profile',
    component: ProfilePage,
  }
}

export default appRoutes;