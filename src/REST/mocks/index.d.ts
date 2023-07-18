declare module './db.json' {
  import { IProfile } from '@bus/auth/typedefs';
  const db: {
    profile: IProfile;
  };
  export default db;
}
