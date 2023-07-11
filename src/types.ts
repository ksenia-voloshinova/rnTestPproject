export type PostListProps = {
    data: PostData[];
};

export type PostData = {
    id: string;
    img: string;
    booked: boolean;
    text: string;
};

export type PostProps = {
    post: PostData;
};

export type State = {
    isAuthorized: boolean;
    userDetails: Object | null;
};
