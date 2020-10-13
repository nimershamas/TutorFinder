import React from 'react';
import './SubjectCard.css'
// For image slider 
import Carousel  from 'react-elastic-carousel';
//Components : 
import SubSubjectCard from '../SubjectCards/SubSubjectCard/SubSubjectCard'
import { Link } from 'react-router-dom';

function SubjectCard (props){
    const data=[{subjectName:"מערכות מידע" , subSubjects:[{subSubjectName:"מערכות מידע" , subSubjectImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxFK7gBJPTQd64UEvpYjbnX28cl_FB4n3WZg&usqp=CAU" , subSubjectRating:"4.8" , subSubjectPrice:"15.00"},
            {subSubjectName:"סיעוד" , subSubjectImg:"data:image/jpeg;base64,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" , subSubjectRating:"4.0" ,subSubjectPrice:"12.00"},
            {subSubjectName:"משאבי אנוש" , subSubjectImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAABZVBMVEX///////78///+//3//f/9//z5//+orafv8ev09PT+/fz6+fz9//3y9uzmtbTpvbn23Nz5//nip6nSSk3RbHHivbf46enMLii/Fg60AAGSAAC6IiPMIx7QGxLGIhnZg4OhHBh1DBBsDgWyIBzDIR60Gxa6KSjzzsl0AwBVCgwvCAe2Ew6dHhe2Ki6fJCSEFhKsKyrAVFnpnJYRAACELCmODwu3OjvghHyEHCCYKiaPGx5hBwB2ExTJQju4bW1/EAJaAwZQEBLAX1+vXVYkAABvGRumLiupTk6QExQvAACTKCVVFhN/HiMcBABRAADr0dbzVFJrHR9GDBHcWVYAAABbJSGzPj6hISraRURAAADGxsXU1tDAw72WnZWws6uruKaKnHJ2iVxfd0VacT9KYDg8Uy9SZUmFj3rd4tQ+Vy0pQSTL2MGxuqVndmIxSS1FXTxBWSSntJKOo3WBkV6Hlnx3gl91fG6JvLMCAAAD9UlEQVR4nO3a21MaWRAH4DMHGIcRdSZsAAVxAjGRyC1RWa6J7gaW4JJsdC/RAQYQCDHGXZXJ37/jhcRUWbX7ADWVrt/3og8+dFcfuk8fYQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB75mJMdsgCczLB7lCmwykyj8xnObdy9dgdzBSIc/MLinrP+8N9Hxfp1ZCzBX9gcSkY8oeWwwvc7nAmTRCdK4vag0j0YXQ1GAw9Uji1FPnjxbXYE209nkimqungU8aJpcifLUY2NgNbmeSDVDKdWFUYrVYqsB+XspuPlnL5WC6fLxTTpXui0yU77Y5rYhzs+QstHdzObW/uJKP5WFH7yedi3GV3XBP0sxZP1l5WCuVyJa5lC5q29ctjK28aPFaPWdeq2SevctXii0qxUH6tJVMJr0Klz3A26w1rqZ2Ng1qyVNN2f62/1vI1b2mFSoKMvwmFtUh9IxJP+38rpXbqhWqqVkln3HYHNiFOUfGHopF6PRKPr/qDybd71VwmW0tfDgsi5P3Qamrv91cH5eJa5KC+Fq/88baqJSS745oYroQCWnFvL7Zd3onF8tE//ypXtXUvoZ2C7y+Hl1KRbKZkySSUN08DyyVFtDusyRGVd8uBqJbKZ3d3X27NW59Ln89NpolaZkXfs3ehh9FoInuQneceSneYG5z5nu/7/eGV+z5rlaBzCx0TOJuRmE9RrNpxj5PS6RwbztgdwZQ1VbsjmK5DncrucDeJ+gGdoXMtu5PesDuCafK41KsOI8hX853QDfSGh7V0Jhntjmmahj5ndzhTIDXZSbvb6ZhHR70js0Vlzx0TWFMyut2jXq9/Ohi8H9odz+TpDaPX+9A/Pe73eicqqQffK57mx37/+DI7Kz/moJagwA4bn45PT/t/9z8MKA4Lh/rZaFrJ/dP/ZNAc9o2mi3kkfUgzO8bk5pwwfqMn8vFzS7f3hobOyGQ21rh1GtUmwS3po/H1d0OnVj7LiTkeB4J1SaNn7ux8MD6kLd3WUKZDGrW7N4UjWUAmnZ13BtcbA809XhqdX/SujibRhxh11D6/PqM0C2iNhlG78976KRlMoDcjLMOLM9NUrQJSW91vONjoom11GalldyRTIjPJ7JhusgW8zFDvdsQhxe32i1HHRbWFXhuatAvoZMaMSuaraHcQWJN0Aa0Z/5lsC72mG//9N9+1FukWyuheYsYaEsGXmK8EtUXupfAbDp3iS8wtjhbl8lkk6gVsuGhXUNJpPlR8oUvk/ov7Dfeh3RFMmU78mi0Tb6HMTbyATJbtjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+v38BD9uF/qvoxGUAAAAASUVORK5CYII=" , subSubjectRating:"4.1" ,subSubjectPrice:"16.00"},
    ]},{subjectName:"מערכות מידע" , subSubjects:[{subSubjectName:"מערכות מידע" , subSubjectImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxFK7gBJPTQd64UEvpYjbnX28cl_FB4n3WZg&usqp=CAU" , subSubjectRating:"4.8" , subSubjectPrice:"15.00"},
    {subSubjectName:"סיעוד" , subSubjectImg:"data:image/jpeg;base64,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" , subSubjectRating:"4.0" ,subSubjectPrice:"12.00"},
    {subSubjectName:"משאבי אנוש" , subSubjectImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAABZVBMVEX///////78///+//3//f/9//z5//+orafv8ev09PT+/fz6+fz9//3y9uzmtbTpvbn23Nz5//nip6nSSk3RbHHivbf46enMLii/Fg60AAGSAAC6IiPMIx7QGxLGIhnZg4OhHBh1DBBsDgWyIBzDIR60Gxa6KSjzzsl0AwBVCgwvCAe2Ew6dHhe2Ki6fJCSEFhKsKyrAVFnpnJYRAACELCmODwu3OjvghHyEHCCYKiaPGx5hBwB2ExTJQju4bW1/EAJaAwZQEBLAX1+vXVYkAABvGRumLiupTk6QExQvAACTKCVVFhN/HiMcBABRAADr0dbzVFJrHR9GDBHcWVYAAABbJSGzPj6hISraRURAAADGxsXU1tDAw72WnZWws6uruKaKnHJ2iVxfd0VacT9KYDg8Uy9SZUmFj3rd4tQ+Vy0pQSTL2MGxuqVndmIxSS1FXTxBWSSntJKOo3WBkV6Hlnx3gl91fG6JvLMCAAAD9UlEQVR4nO3a21MaWRAH4DMHGIcRdSZsAAVxAjGRyC1RWa6J7gaW4JJsdC/RAQYQCDHGXZXJ37/jhcRUWbX7ADWVrt/3og8+dFcfuk8fYQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB75mJMdsgCczLB7lCmwykyj8xnObdy9dgdzBSIc/MLinrP+8N9Hxfp1ZCzBX9gcSkY8oeWwwvc7nAmTRCdK4vag0j0YXQ1GAw9Uji1FPnjxbXYE209nkimqungU8aJpcifLUY2NgNbmeSDVDKdWFUYrVYqsB+XspuPlnL5WC6fLxTTpXui0yU77Y5rYhzs+QstHdzObW/uJKP5WFH7yedi3GV3XBP0sxZP1l5WCuVyJa5lC5q29ctjK28aPFaPWdeq2SevctXii0qxUH6tJVMJr0Klz3A26w1rqZ2Ng1qyVNN2f62/1vI1b2mFSoKMvwmFtUh9IxJP+38rpXbqhWqqVkln3HYHNiFOUfGHopF6PRKPr/qDybd71VwmW0tfDgsi5P3Qamrv91cH5eJa5KC+Fq/88baqJSS745oYroQCWnFvL7Zd3onF8tE//ypXtXUvoZ2C7y+Hl1KRbKZkySSUN08DyyVFtDusyRGVd8uBqJbKZ3d3X27NW59Ln89NpolaZkXfs3ehh9FoInuQneceSneYG5z5nu/7/eGV+z5rlaBzCx0TOJuRmE9RrNpxj5PS6RwbztgdwZQ1VbsjmK5DncrucDeJ+gGdoXMtu5PesDuCafK41KsOI8hX853QDfSGh7V0Jhntjmmahj5ndzhTIDXZSbvb6ZhHR70js0Vlzx0TWFMyut2jXq9/Ohi8H9odz+TpDaPX+9A/Pe73eicqqQffK57mx37/+DI7Kz/moJagwA4bn45PT/t/9z8MKA4Lh/rZaFrJ/dP/ZNAc9o2mi3kkfUgzO8bk5pwwfqMn8vFzS7f3hobOyGQ21rh1GtUmwS3po/H1d0OnVj7LiTkeB4J1SaNn7ux8MD6kLd3WUKZDGrW7N4UjWUAmnZ13BtcbA809XhqdX/SujibRhxh11D6/PqM0C2iNhlG78976KRlMoDcjLMOLM9NUrQJSW91vONjoom11GalldyRTIjPJ7JhusgW8zFDvdsQhxe32i1HHRbWFXhuatAvoZMaMSuaraHcQWJN0Aa0Z/5lsC72mG//9N9+1FukWyuheYsYaEsGXmK8EtUXupfAbDp3iS8wtjhbl8lkk6gVsuGhXUNJpPlR8oUvk/ov7Dfeh3RFMmU78mi0Tb6HMTbyATJbtjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+v38BD9uF/qvoxGUAAAAASUVORK5CYII=" , subSubjectRating:"4.1" ,subSubjectPrice:"16.00"},
]},{subjectName:"מערכות מידע" , subSubjects:[{subSubjectName:"מערכות מידע" , subSubjectImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxFK7gBJPTQd64UEvpYjbnX28cl_FB4n3WZg&usqp=CAU" , subSubjectRating:"4.8" , subSubjectPrice:"15.00"},
{subSubjectName:"סיעוד" , subSubjectImg:"data:image/jpeg;base64,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" , subSubjectRating:"4.0" ,subSubjectPrice:"12.00"},
{subSubjectName:"משאבי אנוש" , subSubjectImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAABZVBMVEX///////78///+//3//f/9//z5//+orafv8ev09PT+/fz6+fz9//3y9uzmtbTpvbn23Nz5//nip6nSSk3RbHHivbf46enMLii/Fg60AAGSAAC6IiPMIx7QGxLGIhnZg4OhHBh1DBBsDgWyIBzDIR60Gxa6KSjzzsl0AwBVCgwvCAe2Ew6dHhe2Ki6fJCSEFhKsKyrAVFnpnJYRAACELCmODwu3OjvghHyEHCCYKiaPGx5hBwB2ExTJQju4bW1/EAJaAwZQEBLAX1+vXVYkAABvGRumLiupTk6QExQvAACTKCVVFhN/HiMcBABRAADr0dbzVFJrHR9GDBHcWVYAAABbJSGzPj6hISraRURAAADGxsXU1tDAw72WnZWws6uruKaKnHJ2iVxfd0VacT9KYDg8Uy9SZUmFj3rd4tQ+Vy0pQSTL2MGxuqVndmIxSS1FXTxBWSSntJKOo3WBkV6Hlnx3gl91fG6JvLMCAAAD9UlEQVR4nO3a21MaWRAH4DMHGIcRdSZsAAVxAjGRyC1RWa6J7gaW4JJsdC/RAQYQCDHGXZXJ37/jhcRUWbX7ADWVrt/3og8+dFcfuk8fYQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB75mJMdsgCczLB7lCmwykyj8xnObdy9dgdzBSIc/MLinrP+8N9Hxfp1ZCzBX9gcSkY8oeWwwvc7nAmTRCdK4vag0j0YXQ1GAw9Uji1FPnjxbXYE209nkimqungU8aJpcifLUY2NgNbmeSDVDKdWFUYrVYqsB+XspuPlnL5WC6fLxTTpXui0yU77Y5rYhzs+QstHdzObW/uJKP5WFH7yedi3GV3XBP0sxZP1l5WCuVyJa5lC5q29ctjK28aPFaPWdeq2SevctXii0qxUH6tJVMJr0Klz3A26w1rqZ2Ng1qyVNN2f62/1vI1b2mFSoKMvwmFtUh9IxJP+38rpXbqhWqqVkln3HYHNiFOUfGHopF6PRKPr/qDybd71VwmW0tfDgsi5P3Qamrv91cH5eJa5KC+Fq/88baqJSS745oYroQCWnFvL7Zd3onF8tE//ypXtXUvoZ2C7y+Hl1KRbKZkySSUN08DyyVFtDusyRGVd8uBqJbKZ3d3X27NW59Ln89NpolaZkXfs3ehh9FoInuQneceSneYG5z5nu/7/eGV+z5rlaBzCx0TOJuRmE9RrNpxj5PS6RwbztgdwZQ1VbsjmK5DncrucDeJ+gGdoXMtu5PesDuCafK41KsOI8hX853QDfSGh7V0Jhntjmmahj5ndzhTIDXZSbvb6ZhHR70js0Vlzx0TWFMyut2jXq9/Ohi8H9odz+TpDaPX+9A/Pe73eicqqQffK57mx37/+DI7Kz/moJagwA4bn45PT/t/9z8MKA4Lh/rZaFrJ/dP/ZNAc9o2mi3kkfUgzO8bk5pwwfqMn8vFzS7f3hobOyGQ21rh1GtUmwS3po/H1d0OnVj7LiTkeB4J1SaNn7ux8MD6kLd3WUKZDGrW7N4UjWUAmnZ13BtcbA809XhqdX/SujibRhxh11D6/PqM0C2iNhlG78976KRlMoDcjLMOLM9NUrQJSW91vONjoom11GalldyRTIjPJ7JhusgW8zFDvdsQhxe32i1HHRbWFXhuatAvoZMaMSuaraHcQWJN0Aa0Z/5lsC72mG//9N9+1FukWyuheYsYaEsGXmK8EtUXupfAbDp3iS8wtjhbl8lkk6gVsuGhXUNJpPlR8oUvk/ov7Dfeh3RFMmU78mi0Tb6HMTbyATJbtjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+v38BD9uF/qvoxGUAAAAASUVORK5CYII=" , subSubjectRating:"4.1" ,subSubjectPrice:"16.00"},
]}]



const breakPoints = [
    { width: 1, itemsToShow: 1 , showArrows:false },
    { width: 450, itemsToShow: 1, itemsToScroll: 2, showArrows:false },
    { width: 650, itemsToShow: 2.5 , showArrows:false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 ,enableMouseSwipe:false },
    { width: 1450, itemsToShow: 5, enableMouseSwipe:false},
    { width: 1750, itemsToShow: 6,enableMouseSwipe:false },
]



    return (

         <div className="SubjectCard__Wrapper">
             <div className="SubjectCard__WrapperTitle">
                 <h2> צברו כישורים, תיהנו, ובנו לכם ידע טוב יותר</h2>
             </div>
             {
                 data.map((subject ,index) => {
                   return ( <div> <h3 className="SubjectCard__Title"> {subject.subjectName}</h3> 
                   <Carousel className ="cardsSlides"  breakPoints={breakPoints}  >
                            {subject.subSubjects.map((subSubject , index) => {
                                return (           <Link to="/teachers" > 
                                                        <SubSubjectCard 
                                                         key={subSubject.subSubjectName} 
                                                         subjectName={subSubject.subSubjectName} 
                                                         srcimg={subSubject.subSubjectImg} 
                                                         price={subSubject.subSubjectPrice} 
                                                         rating={subSubject.subSubjectRating} /></Link>

                                
                                )
                                
                            })}</Carousel>
                            </div> ) 
                 })
             }
         </div>
         
         );
}

export default SubjectCard;