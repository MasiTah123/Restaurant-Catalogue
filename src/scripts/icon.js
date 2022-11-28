import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons/faHeart';

library.add(faBars, faUtensils, faHouse, faHeart, faUser, faStar, faHeartRegular);

dom.watch();