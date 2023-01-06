import DatabaseConnector from './Connector';

//holds current data shown or selected
export default class CommonDataManager {

    static myInstance = null;

    _funds = "";
    _name="";
    _id="";
    _Log="";
    _rerun=true;
    _qb=false;
    _prompt="";



    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    //Interfaces: getUsers, getProducts, addUser, addProduct, changeUserData

    saveData(){
        DatabaseConnector.getInstance().saveData("test");
    }

    getDataFromBase(){
        DatabaseConnector.getInstance().callAPI();    
    }

    setQB(bool){
        this._qb=bool;
    }

    getQB(){
        return this._qb;
    }

    getName() {
        
        return this._name;
    }

    setName(name) {
        this.setRerun(false);
        this._name = name;
    }

    getFunds(){
        return this._funds;
    }

    setFunds(funds){
        this.setRerun(false);
        this._funds=funds;
        
    }

    getID(){
        return this._id;
    }

    setID(newID){
        this._id=newID;
    }

    setRerun(value){
        this._rerun=value;
    }

    getPrompt(){
        return this._prompt
    }

    setPrompt(newPrompt){
        this._prompt=newPrompt
    }

    rerun(){
        return this._rerun;
    }

}