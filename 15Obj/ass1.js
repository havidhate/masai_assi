let user = { 
    name: "Alice", role: "admin", active: false,
    name: "Bob", role: "user", active: true,
    name: "Charlie", role: "admin", active: true,
    name: "David", role: "user", active: false,
    let print = function() {
        if(this.active && this.role === "admin") {
            console.log("Admin Access Granted!");
        }else if(!(this.active) && this.role === "admin") {
            console.log("User Access Revoked");
        }else if(this.active && this.role === "user") {
            console.log("User Access Granted!");
        }else if(!(this.active) && this.role === "user") {
            console.log("User Access Revoked");
        }else{
            console.log("Access Denied");
        }
};
user.print();


