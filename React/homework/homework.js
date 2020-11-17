let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// let employersNames = [];
// for (let i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }
// for (let i = 0; i < employersNames.length; i++) {
// 	employersNames[i] = employersNames[i].toLowerCase().trim();
// }
let employersNames = employers.filter(employer => employer).map((item)=> item.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {cash, eu:[one, two, three], eu, rus} = sponsors;

const sumSponsors = [...eu, ...rus, 'unexpected sponsor' ];

// function calcCash(own) {
//     own = own || 0;
//     let everyCash = Array.prototype.slice.call(arguments);
//     let total = own;
//     for (let i = 0; i < everyCash[1].length; i++) {
//         total += +everyCash[1][i];
//     }
//     return total;
// }

const calcCash = (cash=0)=> cash.reduce((a, b)=> a+b);

// let money = calcCash(null, sponsors.cash);
const money = calcCash(cash);



// function makeBusiness(owner, director = 'Victor', cash, emp) {
//     // director = director || 'Victor';
//
//     console.log('We have a business. Owner: ' + owner + ', director:
//     ' + director + '. Our budget: ' + cash + '. And our employers: ' +
//     emp);
//     console.log('And we have a sponsors: ');
//     console.log.apply(null, sumSponsors);
//     console.log('Note. Be careful with ' + two + ". It's a huge risk.");
// }
// makeBusiness.apply(null, ['Sam', null, money, employersNames]);

const makeBusiness  = ({cash, emp, owner = 'Sam', director = 'Victor'}) => {
    console.log(`We have a business. Owner: ${owner}, director: ${director}.
     Our budget: ${cash}.
     And our employers:${emp}.
     And we have a sponsors: ${sumSponsors}
     Note. Be careful with ${two}. It is a huge risk.`);
};
makeBusiness({cash: money, emp: employersNames});