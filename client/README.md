Donate & React + Node App
Here's the plan for the app.

_Models_

sent, rejected, uploaded, declined, confirmed

_Rest API Endpoints_
| METHOD | PATH | ACTION | ROLE | COMPLETION |
| POST | /authentication/sign-up | Sign Up | ALL | 🚧 |
| POST | /authentication/sign-in | Sign In | ALL | 🚧 |
| POST | /authentication/sign-out | Sign Out | DONOR | ❌ |
| GET | /authentication/verify | Provide information on current donor | DONOR | 🚧 |
| PATCH | /authentication/profile | Edit profile of current donor | DONOR | ❌ |

| GET | /dare/all | Displays all dare templates | ❌ |

| GET | /dare/create/:id | Displays single dare | ❌ |
| POST | /dare/create/:id | Allow donors to create a dare | ❌ |

| GET | /dare/id/dared | Displays dare infos for dared | ❌ |
| POST | /dare/id/dared | Allow dared to upload or reject dare | ❌ |

| GET | /dare/id/donor | Displays dare infos for donor | ❌ |
| POST | /dare/id/donor | Allow donor to confirm or decline dare | ❌ |

| GET | /profile/:id | Displays information about donor| ❌ |
| PATCH | /profile/:id | Allows donor user to edit profile info | ❌ |

_Views_
| NAME | PATH | PURPOSE |
| Home | / | Teaser, How-it-Works | ❌ |
| Dares | /dare/all | List all dares | ❌ |
| Create Dare | /dare/create/:id | Show dare template incl. dare create from | ❌ |
| Checkout | /checkout | Donate the dare with stripe | ❌ |
| CheckoutConfirmation | /checkout/confirmation | Confirme Dare has been created| ❌ |
| Dared| /dare/id/dared | Show dare and dare upload / reject form | ❌ |
| Donor| /dare/id/donor | Show dare and confirm / reject dare form | ❌ |
| DareConfirmation| /dare/id/confirmation | Thank Donor / Dared | ❌ |

| Profile | /profile | Show profile page | ❌ |
| EditProfile | /profile/edit | Profile Edit | ❌ |

| SignUp | /sign-up | Sign Up | 🚧 |
| SignIn | /sign-in | Sign In | 🚧 |
