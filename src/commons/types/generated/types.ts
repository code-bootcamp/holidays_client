export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  board_id: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  image_: Array<IImage>;
  title: Scalars['String'];
  user_: IUser;
};

export type IBoardReview = {
  __typename?: 'BoardReview';
  board_: IBoard;
  br_id: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  user_: IUser;
};

export type IClass = {
  __typename?: 'Class';
  accountName: Scalars['String'];
  accountNum: Scalars['String'];
  address: Scalars['String'];
  address_category: Scalars['String'];
  address_detail: Scalars['String'];
  bankName: Scalars['String'];
  category: Scalars['String'];
  class_id: Scalars['String'];
  class_mNum: Scalars['Int'];
  content: Scalars['String'];
  content_summary: Scalars['String'];
  createdAt: Scalars['DateTime'];
  image_: Array<IImage>;
  is_ad: Scalars['Int'];
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  price: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
  user_: IUser;
};

export type IClassSchedule = {
  __typename?: 'ClassSchedule';
  class_: IClass;
  cs_id: Scalars['String'];
  date: Scalars['String'];
  remain: Scalars['Int'];
};

export type ICreateBoardInput = {
  content: Scalars['String'];
  imageInput?: InputMaybe<Array<IImageInput>>;
  title: Scalars['String'];
};

export type ICreateBoardReviewInput = {
  board_id: Scalars['String'];
  content: Scalars['String'];
};

export type ICreateClassAdInput = {
  amount: Scalars['Int'];
  class_id: Scalars['String'];
  imp_uid: Scalars['String'];
  method: Scalars['String'];
};

export type ICreateClassInput = {
  accountName: Scalars['String'];
  accountNum: Scalars['String'];
  address: Scalars['String'];
  address_category: Scalars['String'];
  address_detail: Scalars['String'];
  bankName: Scalars['String'];
  category: Scalars['String'];
  classSchedulesInput: Array<ICreateClassScheduleInput>;
  class_mNum: Scalars['Int'];
  content: Scalars['String'];
  content_summary: Scalars['String'];
  imageInput: Array<IImageInput>;
  price: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
};

export type ICreateClassReviewInput = {
  class_id: Scalars['String'];
  content: Scalars['String'];
  grade: Scalars['Int'];
};

export type ICreateClassScheduleInput = {
  date: Scalars['String'];
  remain: Scalars['Int'];
};

export type ICreateReservationInput = {
  class_id: Scalars['String'];
  personnel: Scalars['Int'];
  res_date: Scalars['String'];
};

export type ICreateUserInput = {
  birth_date?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  pwd: Scalars['String'];
};

export type IFetchBoardReviews = {
  __typename?: 'FetchBoardReviews';
  br_id: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  grade: Scalars['Int'];
  name: Scalars['String'];
};

export type IFetchBoards = {
  __typename?: 'FetchBoards';
  board_id: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type IFetchClassReviews = {
  __typename?: 'FetchClassReviews';
  content: Scalars['String'];
  cr_id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  grade: Scalars['Int'];
  name: Scalars['String'];
};

export type IFetchClasses = {
  __typename?: 'FetchClasses';
  address: Scalars['String'];
  address_detail: Scalars['String'];
  class_id: Scalars['String'];
  content_summary: Scalars['String'];
  is_ad: Scalars['Int'];
  price: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
  url: Scalars['String'];
};

export type IFetchClassesPopular = {
  __typename?: 'FetchClassesPopular';
  address: Scalars['String'];
  address_detail: Scalars['String'];
  class_id: Scalars['String'];
  content_summary: Scalars['String'];
  price: Scalars['Int'];
  row_count: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
  url: Scalars['String'];
};

export type IFetchReservationsOfClass = {
  __typename?: 'FetchReservationsOfClass';
  class_id: Scalars['String'];
  date: Scalars['String'];
  name: Scalars['String'];
  personnel: Scalars['String'];
  remain: Scalars['Int'];
  res_id: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type IFetchReservationsOfUser = {
  __typename?: 'FetchReservationsOfUser';
  class_id: Scalars['String'];
  date: Scalars['String'];
  name: Scalars['String'];
  personnel: Scalars['String'];
  res_id: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type IFetchWishlists = {
  __typename?: 'FetchWishlists';
  address: Scalars['String'];
  address_detail: Scalars['String'];
  class_id: Scalars['String'];
  content_summary: Scalars['String'];
  price: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
  url: Scalars['String'];
};

export type IImage = {
  __typename?: 'Image';
  board_: IBoard;
  class_: IClass;
  image_id: Scalars['String'];
  is_main: Scalars['Int'];
  magazine_: IMagazine;
  type: Scalars['Int'];
  url: Scalars['String'];
};

export type IImageInput = {
  is_main: Scalars['Int'];
  type: Scalars['Int'];
  url: Scalars['String'];
};

export type IMagazine = {
  __typename?: 'Magazine';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  magazine_id: Scalars['String'];
  title: Scalars['String'];
  user_: IUser;
};

export type IMutation = {
  __typename?: 'Mutation';
  cancelClassAd: Scalars['Boolean'];
  checkEmailToken: Scalars['Boolean'];
  checkPhoneToken: Scalars['Boolean'];
  createBoard: Scalars['String'];
  createBoardReview: Scalars['String'];
  createClass: Scalars['String'];
  createClassAd: Scalars['Boolean'];
  createClassInquiry: Scalars['String'];
  createClassReview: Scalars['String'];
  createImage: Array<Scalars['String']>;
  createReservation: Scalars['String'];
  createUser: IUser;
  createWishlist: Scalars['String'];
  deleteBoard: Scalars['Boolean'];
  deleteBoardReview: Scalars['Boolean'];
  deleteClass: Scalars['Boolean'];
  deleteClassReview: Scalars['Boolean'];
  deleteReservation: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteWishlist: Scalars['Boolean'];
  getTokenEmail: Scalars['String'];
  getTokenPhone: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  updateBoard: Scalars['Boolean'];
  updateBoardReview: IBoardReview;
  updateClass: Scalars['Boolean'];
  updateClassReview: Scalars['Boolean'];
  updateReservation: Scalars['Boolean'];
  updateUser: IUser;
  updateUserPwd: Scalars['Boolean'];
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCancelClassAdArgs = {
  createClassAdInput: ICreateClassAdInput;
};


export type IMutationCheckEmailTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCheckPhoneTokenArgs = {
  phone: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateBoardReviewArgs = {
  createBoardReviewInput: ICreateBoardReviewInput;
};


export type IMutationCreateClassArgs = {
  createClassInput: ICreateClassInput;
};


export type IMutationCreateClassAdArgs = {
  createClassAdInput: ICreateClassAdInput;
};


export type IMutationCreateClassInquiryArgs = {
  class_id: Scalars['String'];
  content: Scalars['String'];
};


export type IMutationCreateClassReviewArgs = {
  createClassReviewInput: ICreateClassReviewInput;
};


export type IMutationCreateImageArgs = {
  board_: Scalars['String'];
  class_: Scalars['String'];
  imageInput: Array<IImageInput>;
  magazine_: Scalars['String'];
};


export type IMutationCreateReservationArgs = {
  createReservationInput: ICreateReservationInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationCreateWishlistArgs = {
  class_id: Scalars['String'];
};


export type IMutationDeleteBoardArgs = {
  board_id: Scalars['String'];
};


export type IMutationDeleteBoardReviewArgs = {
  br_id: Scalars['String'];
};


export type IMutationDeleteClassArgs = {
  class_id: Scalars['String'];
};


export type IMutationDeleteClassReviewArgs = {
  cr_id: Scalars['String'];
};


export type IMutationDeleteReservationArgs = {
  res_id: Scalars['String'];
};


export type IMutationDeleteWishlistArgs = {
  class_id: Scalars['String'];
};


export type IMutationGetTokenEmailArgs = {
  email: Scalars['String'];
  method: Scalars['String'];
};


export type IMutationGetTokenPhoneArgs = {
  phone: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  pwd: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateBoardReviewArgs = {
  updateBoardReviewInput: IUpdateBoardReviewInput;
};


export type IMutationUpdateClassArgs = {
  updateClassInput: IUpdateClassInput;
};


export type IMutationUpdateClassReviewArgs = {
  updateClassReviewInput: IUpdateClassReviewInput;
};


export type IMutationUpdateReservationArgs = {
  rse_id: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserPwdArgs = {
  email: Scalars['String'];
  pwd: Scalars['String'];
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoardDetail: IBoard;
  fetchBoardReviews: Array<IFetchBoardReviews>;
  fetchBoards: Array<IFetchBoards>;
  fetchBoardsOfMine: Array<IFetchBoards>;
  fetchClassDetail: IClass;
  fetchClassReviews: Array<IFetchClassReviews>;
  fetchClassSchedules: Array<IClassSchedule>;
  fetchClasses: Array<IFetchClasses>;
  fetchClassesAd: Array<IFetchClasses>;
  fetchClassesOfMine: Array<IFetchClasses>;
  fetchClassesPopular: Array<IFetchClassesPopular>;
  fetchLoginUser: IUser;
  fetchReservationsOfClass: Array<IFetchReservationsOfClass>;
  fetchReservationsOfUser: Array<IFetchReservationsOfUser>;
  fetchUserIdByPhone: IUser;
  fetchWishlistOfMine: Scalars['Boolean'];
  fetchWishlists: Array<IFetchWishlists>;
};


export type IQueryFetchBoardDetailArgs = {
  board_id: Scalars['String'];
};


export type IQueryFetchBoardReviewsArgs = {
  board_id: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchClassDetailArgs = {
  class_id: Scalars['String'];
};


export type IQueryFetchClassReviewsArgs = {
  class_id: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchClassSchedulesArgs = {
  class_id: Scalars['String'];
};


export type IQueryFetchClassesArgs = {
  address_category?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchClassesAdArgs = {
  address_category?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchClassesPopularArgs = {
  address_category?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchUserIdByPhoneArgs = {
  phone: Scalars['String'];
};


export type IQueryFetchWishlistOfMineArgs = {
  class_id: Scalars['String'];
};

export type IUpdateBoardInput = {
  birth_date: Scalars['String'];
  board_id: Scalars['String'];
  content: Scalars['String'];
  email: Scalars['String'];
  imageInput?: InputMaybe<Array<IImageInput>>;
  title: Scalars['String'];
};

export type IUpdateBoardReviewInput = {
  br_id: Scalars['String'];
  content: Scalars['String'];
};

export type IUpdateClassInput = {
  accountName: Scalars['String'];
  accountNum: Scalars['String'];
  address: Scalars['String'];
  address_category: Scalars['String'];
  address_detail: Scalars['String'];
  bankName: Scalars['String'];
  category: Scalars['String'];
  classSchedulesInput: Array<ICreateClassScheduleInput>;
  class_id: Scalars['String'];
  class_mNum: Scalars['Int'];
  content: Scalars['String'];
  content_summary: Scalars['String'];
  imageInput: Array<IImageInput>;
  price: Scalars['Int'];
  title: Scalars['String'];
  total_time: Scalars['String'];
};

export type IUpdateClassReviewInput = {
  content: Scalars['String'];
  cr_id: Scalars['String'];
  grade: Scalars['Int'];
};

export type IUpdateUserInput = {
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  birth_date: Scalars['String'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  type: Scalars['Int'];
  user_id: Scalars['String'];
};
