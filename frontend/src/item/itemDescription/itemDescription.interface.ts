export default interface itemDescriptionInterface {
    itemState: {
        pk: number;
        title: string;
        file?: any;
        upload_to: any;
        category: string | number;
        image: string;
        raiting_kino: number;
        raiting_prod: number;
        year_prod: number;
        description: string;
    }
}