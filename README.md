pour faire se projet

j'ai commencé par créer ma structure et mes pages en HTML

Structure : Components
                ---> home
                ---> navbar
            events
                ---> event-create
                ---> event-details
                ---> event-list
            users
                ---> login
                ---> register
            models
                ---> event.ts (evenements)
                ---> register.ts (pour enregistrer un utilisateur)
                ---> userLogin.ts (pour que l'utilisateur se connecte)
            services
                ---> auth
                ---> events

Ensuite, sur base du model register, j'ai modifié la page users/register afin de créer le formulaire d'enregistrement
lié à un groupform
j'ai également fait le test de chaque entrée pour afficher une erreur si l'utilisateur n'entre pas une donnée valide (email, exigences du mot de passe)

A SUIVRE

créer le service Auth pour appeler l'api, placer les observables et s'abonner
si le register est correct on l'envoie à la db

s'il y a doublon dans les pseudos et/ou email on recevra une erreur 400 : afficher un message pour signaler qu'il y a eu une erreur


            