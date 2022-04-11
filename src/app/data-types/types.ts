import * as url from "url";

export class User {
  id: number | undefined;
  name: string | undefined;
  // @ts-ignore
  avatar: url;
  friends?: User[]
}

export class Message {
  sender: User | undefined;
  content: any;
  date: Date | undefined;
}

export class Messages {
  user: User | undefined;
  list: Message[] | undefined
}

export class Chat {
  user: User | undefined;
  to_users: User[] | undefined;
  // @ts-ignore
  avatar: url;
}


