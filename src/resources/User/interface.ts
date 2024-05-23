export interface IUserProfile {

    _id: string;
    email: string;
    DOB: string; // Assuming the date is formatted as an ISO string
    __v: number;
    createdAt: string; // Assuming the date is formatted as an ISO string
    gender: string;
    name: string;
    phone: string;
    updatedAt: string; // Assuming the date is formatted as an ISO string
    web_client: boolean;
    profile_image: string;
    address: string;

}


export interface IProfileDataResponse {
    data: IUserProfile,
    message: string
}


