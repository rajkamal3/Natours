// import axios from 'axios';
// import { showAlert } from './alerts';
// const stripe = Stripe(
//     'pk_test_51HJIBlJiLJSNl1xZI1SbyBllhoLvNFIonRzVBadRkNBSWcjnq09VTlUSg6JHkS7LVfA8SpyA9aGm7zeHuYjtowfn0028Hjg2mJ'
// );

// export const bookTour = async (tourId) => {
//     try {
//         // 1) Get checkout session from API
//         const session = await axios(
//             `/api/v1/bookings/checkout-session/${tourId}`
//         );
//         // console.log(session);

//         // 2) Create checkout form + chanre credit card
//         await stripe.redirectToCheckout({
//             sessionId: session.data.session.id
//         });
//     } catch (err) {
//         console.log(err);
//         showAlert('error', err);
//     }
// };

import axios from 'axios';
import { showAlert } from './alerts';
// import Stripe from 'stripe';
const stripe = Stripe(
    'pk_test_51HJIBlJiLJSNl1xZI1SbyBllhoLvNFIonRzVBadRkNBSWcjnq09VTlUSg6JHkS7LVfA8SpyA9aGm7zeHuYjtowfn0028Hjg2mJ'
);

export const bookTour = async (tourId) => {
    try {
        // 1) Get checkout session from API
        const session = await axios(
            `/api/v1/bookings/checkout-session/${tourId}`
        );
        // console.log(session);

        // 2) Create checkout form + chanre credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
};
