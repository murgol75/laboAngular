import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const connectedGuard: CanActivateFn = (route, state) => {

  const router = inject(Router); 
  const fakeAuthService = inject(AuthService);



// plus safe : plutot que de se baser sur le local Storage qui n'est pas fiable, on va plutot surveiller l'observable connectedUser présent dans notre service
return fakeAuthService.$connectedUser.pipe(map((res) => {// pipe = méthode pour composer des opérations sur l'observable 
  // l'opérateur map nous permettra de savoir ce qu'il y a dans l'observable connectedUser à l'instant où la Guard va être appelée
  // pas besoin de s'abonner à l'observable, la guard n'est active que le temps d'accéder à la route
  //res contient soit un User, soit undefined
  if(res) {
    return true;
  }
  else {
    router.navigateByUrl('events/eventCreate'); //on peut utiliser router car on l'a injecté plus haut et donc on l'envoie sur la page de connection
    return false;}



}))};
