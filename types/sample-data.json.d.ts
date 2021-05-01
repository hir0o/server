declare module "restaurants" {
  export const restaurant: {
    id: number;
    name: string;
    image: string;
    map: string;
    reviews: {
      id: number;
      restaurantId: number;
      title: string;
      comment: string;
      userId: number;
      user: {
        id: number;
        sub: string;
        nickname: string;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    }[];
    createdAt: string;
    updatedAt: string;
  }[];
}
