

export default class DatabaseConnector {


    static myInstance = null;

    /**
     * @returns {DatabaseConnector}
     */

    //Interfaces: getUsers, getProducts, addUser, addProduct, changeUserData

    static getInstance() {
        if (DatabaseConnector.myInstance == null) {
            DatabaseConnector.myInstance = new DatabaseConnector();
        }

        return this.myInstance;
    }

    callAPI() {
        fetch("http://localhost:9000/test")
            .then(res => res.text())
            .then(res => console.log({apiResponse:res})).catch(err=> err);
    }

    /*async callDatabase(){
      

            (fetch("http://localhost:9000/init/callD",{
                method:"POST",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
                },
                mode:"cors",
                body:JSON.stringify({"signalData":"data"})
            })
                .then(res => res.text())
                .then(res=> console.log(JSON.parse(res.body))).catch(err=> err))
        
    }

            
    async testConnectiomm(){
        console.log("testC");
        (fetch("http://localhost:9000/init/testC",{
                method:"POST",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
                },
                mode:"cors",
                body:JSON.stringify({"userData":{id:"1", name:"test", money:5.5}})
            })
                .then(res => res.text())
                .then(res=> console.log("message done")).catch(err=> err))
    }*/
    

    //gets userDataFromDtabase
    async getFromDataBase(){
        var array;
            array=await (fetch("http://localhost:9000/init/getData")
                .then(res => res.text())
                .then(res=> {return JSON.parse(res)}).catch(err=> err)
            )
        return array;
    }

    async getProducts(){
        
        var array;
            array= await (fetch("http://localhost:9000/init/getProducts")
                .then(res => res.text())
                .then(res=> {return (JSON.parse(res))}).catch(err=> err)
            )
            
        return array;
    }

   

    /*the following are used to get data in the final product */
    //datas should be in format JSON.stringify// 
    //{data:{dataname:value, dataname2:value2....}}

    //gets either all users to be used in the listing component or single user data based
    //on whether an Id is passsed to the data

    async finalGetUsers(data){
        
        var array;
            array=await(fetch("http://localhost:9000/init/getUsers",{
            method:"GET",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
            },
            mode:"cors",
            body:null
        })
        .then(res => res.text())
        .then(res=> {
            if(res.msg){
                return false
            }
            return JSON.parse(res)}).catch(err=> err))
        return array;
    }

    async finalSaveUser(data){
        
        fetch("http://localhost:9000/init/addUser",{
            method:"POST",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
            .then(res => res.text())
            .then(res=> { console.log(res+" done")}).catch(err=> err)
       
    }

    async finalRemoveUser(data){
        console.log("removing based on data!"+JSON.stringify(data))
        var response=fetch("http://localhost:9000/init/removeUser",{
            method:"POST",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
            .then(res => res.text())
            .then(res=> { return JSON.parse(res)}).catch(err=> err)
        return response;
    }

    
    async finalUpdateUser(data){
        console.log("updating user with data: "+ JSON.stringify(data))
        var response= await (fetch("http://localhost:9000/init/updateUser",{
            method:"POST",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
            .then(res => res.text())
            .then(res=> { 
                console.log("finished updating user data")
                return JSON.parse(res)}).catch(err=> err))
        return response;
        
    }

    async finalGetAUser(data){
        return await (fetch("http://localhost:9000/init/getAUser",{
            method:"POST",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
            .then(res => res.text())
            .then(res=> { console.log(res+" done")}).catch(err=> err))
        
    }

    //gets product data
    async finalGetProducts(data){
        
        var array;
            array= await (fetch("http://localhost:9000/init/getProducts"),{
                method:"POST",
                    headers:{      
                        'Accept': 'application/json',    
                        'Content-Type': 'application/json'
                },
                mode:"cors",
                body:data
            }
                .then(res => res.text())
                .then(res=> {return (JSON.parse(res))}).catch(err=> err)
            )
            
        return array;
    }

    async finalSaveProduct(data){
        const result=await (fetch("http://localhost:9000/init/addProduct",{
            method:"POST",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
            .then(res => res.text())
            .then(res=> { console.log(res+" done")}).catch(err=> err))
            return result
    }

    async finalRemoveProduct(data){
        const result=await(fetch("http://localhost:9000/init/removeProduct",{
            method:"POST",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
            .then(res => res.text())
            .then(res=> { console.log(res+" done")}).catch(err=> err))
        return result
    }

    //used to update to the backend about a product sale
    //data should have the product names, how many of each were purchased and by whom
    //

    async finalUpdateProductAndUser(data){
        console.log(data)
        const result = await(fetch("http://localhost:9000/init/updateProductAndUser",{
            method:"POST",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
            .then(res => res.text())
            .then(res=> {return JSON.parse(res)}).catch(err=> err))
        return result
    }



    //used by admin to update product
    async finalUpdateProduct(data){
        const result = await(fetch("http://localhost:9000/init/updateProduct",{
            method:"POST",
                headers:{      
                    'Accept': 'application/json',    
                    'Content-Type': 'application/json'
            },
            mode:"cors",
            body:JSON.stringify(data)
        })
            .then(res => res.text())
            .then(res=> { console.log(res+" done")}).catch(err=> err))
        return result
    }

   

}