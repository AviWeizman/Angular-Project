import {Posts} from './posts';
import {Tasks} from './tasks';

export class Users {
    public Name: String;
    public Email: String;
    public Street: String;
    public City: String;
    public Zipcode: Number;
    public Tasks: Tasks[];
    public Posts: Posts[];

}
