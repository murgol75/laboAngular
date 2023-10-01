    import { Injectable } from '@angular/core';
    import {
      HttpRequest,
      HttpHandler,
      HttpEvent,
      HttpInterceptor,
    } from '@angular/common/http';
    import { Observable } from 'rxjs';

    @Injectable()
    export class AuthTokenInterceptor implements HttpInterceptor {
      constructor() {}


      // C'est la méthode principale de l'intercepteur. Elle est appelée à chaque fois qu'une requête HTTP est faite à partir de l'application.
      intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
      ): Observable<HttpEvent<unknown>> {
        let token = localStorage.getItem('apiToken');

        //Si un token est présent et non vide, on clone la requête d'origine et on ajoute un header d'autorisation avec le token. Ensuite, on passe la requête modifiée au gestionnaire de requêtes suivant (next.handle(requestClone)) pour qu'elle soit envoyée au serveur.

        if (token && token !== '') {
          let requestClone = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
          return next.handle(requestClone);
        }

        //Si aucun token n'est présent, la requête d'origine est passée directement au gestionnaire de requêtes suivant, sans aucune modification.
        return next.handle(request);
      }
    }