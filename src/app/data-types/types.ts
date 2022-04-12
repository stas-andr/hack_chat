
export class User {
  id: number | undefined;
  name: string | undefined;
  // @ts-ignore
  avatar: URL;
  friends?: User[]
}

export class Message {
  name: User | undefined;
  message: any;
  time: Date | undefined;
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


