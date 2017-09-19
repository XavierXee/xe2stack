export interface IDBConnector {

	// config.db_host = 'ds125262.mlab.com:25262';
	// config.db_user_root = db_user_root.user;
	// config.db_user_visitor = db_user_visitor.user;
	// config.db_password = 'Se5ah9bh!';
	// config.db_name = 'xvr2frts-db';
    
    db_index: number;
    db_host: string;
    db_user_root:string;
    db_user_visitor:string;
    db_password:string;
    db_name:string;
    init():any;

}

// export function dbConnect (name: string) {
//     return `Hello from ${name}`;
// }