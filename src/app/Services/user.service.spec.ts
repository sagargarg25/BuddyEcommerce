import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Users } from '../Model/Users';
import {HttpTestingController} from '@angular/common/http/testing';
describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule,HttpClientTestingModule] });
    service = TestBed.inject(UserService);
     httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('be able to retrieve posts from the API bia GET', () => {
    const UsersData: Users[] = [
      {     id: 1,
   UserName: "sagar garg",
   UserEmail: "sagar@gmail.com",
   UserPassword: "sagar@123",
          },
 {
   id: 2,
   UserName: "shubham garg",
   UserEmail: "shubham@gmail.com",
   UserPassword: "shubham@123",
  
 },
 {
   id: 3,
   UserName: "saif ejaz",
   UserEmail: "saif@gmail.com",
   UserPassword: "saif@123",
  
 },
 {
   id: 4,
   UserName: "paritosh",
   UserEmail: "paritosh@gmail.com",
   UserPassword: "paritosh@123",
  
 },
 {
   id: 5,
   UserName: "shubham garg",
   UserEmail: "shubham@gmail.com",
   UserPassword: "shubham@123",
          },
 {
   id: 6,  UserName: "Manan Sahni", UserEmail: "manan@gmail.com",  UserPassword: "manan@123"  }

] ;
    service.getUsers().subscribe(users => {
        expect(users.length).toBe(6);
        expect(users).toEqual(UsersData);
    });
    const request = httpMock.expectOne( `${service.userUrl}`);
expect(request.request.method).toBe('GET');
request.flush(UsersData);
   });
  }); 

