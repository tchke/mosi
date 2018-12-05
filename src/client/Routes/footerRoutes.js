import Corporateresponsibility from '../containers/corporateresponsibility';
import Deliveryandreturns from '../containers/deliveryandreturns';
import Faq from '../containers/faq';
import Partners from '../containers/partners';
import Pharmacylocator from '../containers/pharmacylocator';
import Productrecall from '../containers/productrecall';
import Sitemap from '../containers/sitemap';
import Termsandconditions from '../containers/termsandconditions';
import Testimonials from '../containers/testimonials';
import Bootsdotcom from '../containers/bootsdotcom';
import Accessibility from '../containers/accessibility';
import Careers from '../containers/careers';
import ContactUs from '../containers/contactus';
import Cookiesandprivacypolicy from '../containers/cookiesandpp';

/**
 * This is for having routes splited by sections 
 * so that we don't need to do any manipulaton when building footer menu
 */
export default [
    {
        ...Faq,
        path: '/faq',
        exact: true
        
    },
    {
        ...ContactUs,
        path: '/contactus',
        exact: true
    },
    {
        ...Deliveryandreturns,
        path: '/deliveryandreturns',
        exact: true
    },
    {
        ...Productrecall,
        path: '/productrecall',
        exact: true
    },
    {
        ...Pharmacylocator,
        path: '/pharmacylocator',
        exact: true
    },
    {
        ...Partners,
        path: '/partners',
        exact: true
    },
    {
        ...Corporateresponsibility,
        path: '/corporateresponsibility',
        exact: true
    },            
    {
        ...Careers,
        path: '/careers',
        exact: true
    },
    {
        ...Testimonials,
        path: '/testimonials',
        exact: true
    },
    {
        ...Bootsdotcom,
        path: '/bootsdotcom',
        exact: true
    },
    {
        ...Termsandconditions,
        path: '/termsandconditions',
        exact: true
    },
    {
        ...Cookiesandprivacypolicy,
        path: '/cookiesandprivacypolicy',
        exact: true
    },
    {
        ...Accessibility,
        path: '/accessibility',
        exact: true
    },
    {
        ...Sitemap,
        path: '/sitemap',
        exact: true
    }
]