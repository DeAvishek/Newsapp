import React, { Component } from 'react'
import NewsComponent from './NewsComponent'
import Loader from './Loader';

export class News extends Component {
  
  articles=[
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "BBC News",
    //     "title": "John McCain's son endorses Harris, criticises Trump's cemetery visit",
    //     "description": "The youngest son of late Republican Senator John McCain says he recently registered as a Democrat.",
    //     "url": "https://www.bbc.co.uk/news/articles/cgedv8w7qd7o",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/737b/live/084c0d20-6ac8-11ef-a329-01e5398e96e2.jpg",
    //     "publishedAt": "2024-09-04T14:52:17.3840419Z",
    //     "content": "\"Show respect and leave. It doesn't need to be videoed,\" Mr McCain told CNN's Jake Tapper on Tuesday. \r\nHe added: \"The point of Arlington Cemetery is to go and show respect for the men and women who … [+1775 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "BBC News",
    //     "title": "Australian actor Simon Baker pleads guilty to drink driving",
    //     "description": "Baker, known for his roles in The Mentalist and The Devil Wears Prada, was caught on a road near his home.",
    //     "url": "https://www.bbc.co.uk/news/articles/credlv5qqevo",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/674f/live/58631c70-6a6b-11ef-8c32-f3c2bc7494c6.jpg",
    //     "publishedAt": "2024-09-04T14:37:16.9777126Z",
    //     "content": "He grew up in northern NSW and cut his teeth on classic Australian shows like Heartbreak High and A Country Practice.\r\nHe won Best New Talent at the Logies - Australia's top television awards - in 19… [+524 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "BBC News",
    //     "title": "Teenager charged over shooting of NFL star Ricky Pearsall",
    //     "description": "The 17-year-old is accused of attempted murder over an attack on the 49ers rookie.",
    //     "url": "https://www.bbc.co.uk/news/articles/c3ejy0el892o",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d289/live/61b9bd60-6aa7-11ef-a5fb-99daa04f52d8.jpg",
    //     "publishedAt": "2024-09-04T12:37:12.2131444Z",
    //     "content": "John Lynch told reporters on Tuesday his player was doing \"remarkably well\" in the situation.\r\nPearsall had been signing autographs at an event before heading to the square where the incident occurre… [+1281 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "BBC News",
    //     "title": "Raygun defends record as Australia's best breakdancer",
    //     "description": "Rachel Gunn says sorry after her zero score at the Olympics prompted ridicule and made global headlines.",
    //     "url": "https://www.bbc.co.uk/news/articles/ckg54k40857o",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5109/live/c7c8ade0-6a8f-11ef-a788-4d91a3630157.jpg",
    //     "publishedAt": "2024-09-04T11:22:23.9794765Z",
    //     "content": "It is really sad to hear those criticisms and I am very sorry for the backlash that the community has experienced, but I cant control how people react, she continued, addressing the flood of critique… [+2673 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "BBC News",
    //     "title": "Grenfell's path to disaster: How chain of failures and dishonesty led to 72 deaths",
    //     "description": "The damning report sets out failures stretching back to the early 1990s over how fire safety was regulated in high rises.",
    //     "url": "https://www.bbc.co.uk/news/articles/cgedv58e7ygo",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6870/live/1f98a850-6a9e-11ef-a788-4d91a3630157.jpg",
    //     "publishedAt": "2024-09-04T10:52:17.899928Z",
    //     "content": "The inquiry examined the roles of three companies which made cladding and insulation used in the refurbishment of Grenfell Tower.\r\nIn a key passage it concluded:\r\nOne very significant reason why Gren… [+3753 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "BBC News",
    //     "title": "France sees Channel migrant deaths as a problem of Britain's making",
    //     "description": "Many in France deeply resent the way their own lives have been transformed by a crisis they see as British-made.",
    //     "url": "https://www.bbc.co.uk/news/articles/c9v8272vkxpo",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d79d/live/643a74a0-6a82-11ef-b77f-59d66581af98.jpg",
    //     "publishedAt": "2024-09-04T07:07:15.7907023Z",
    //     "content": "In the UK, officials have been quick to focus on - and to condemn - the smuggling gangs. Each incident, each death, is seen as the result of cynical criminal activity. Which, of course, it is. \r\nOnce… [+1352 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "BBC News",
    //     "title": "Linda Sun: A Ferrari, a Honolulu hideaway, salted duck - top NY official allegedly spied for China",
    //     "description": "US officials say China lavished Linda Sun with money and perks including meals prepared by a personal chef.",
    //     "url": "https://www.bbc.co.uk/news/articles/cgl23xlrzp2o",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9163/live/e1ae2d20-6a49-11ef-b43e-6916dcba5cbf.jpg",
    //     "publishedAt": "2024-09-04T03:22:13.244919Z",
    //     "content": "They also bought a $2.1m ocean-view condominium in Honolulu, Hawaii, and luxury vehicles including a 2024 Ferrari Roma sports car, according to the indictment.\r\nThe couple pleaded not guilty on Tuesd… [+2733 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "BBC News",
    //     "title": "Markets slide as Nvidia shares plunge almost 10%",
    //     "description": "Stocks drop as disappointing US economic data dampened investor optimism about the AI boom.",
    //     "url": "https://www.bbc.co.uk/news/articles/crlrw01g45ro",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/df45/live/14d47f90-6a60-11ef-8d78-2ffee043a095.jpg",
    //     "publishedAt": "2024-09-04T03:07:09.2958278Z",
    //     "content": "Financial markets in Asia and the US have tumbled on fears that the world's largest economy could be headed to a recession.\r\nShares in American chip giant Nvidia slumped by almost 10% as concerns ove… [+329 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "BBC News",
    //     "title": "Philippines: Alleged Chinese spy Alice Guo arrested in Indonesia",
    //     "description": "Alice Guo was arrested in Indonesia after being on the run in four countries for weeks.",
    //     "url": "https://www.bbc.co.uk/news/articles/c0mnyrm8739o",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a0ab/live/57260dc0-6a59-11ef-9711-899b8d9b3776.png",
    //     "publishedAt": "2024-09-04T02:37:12.9533016Z",
    //     "content": "The former mayor said she grew up on the family farm with her Chinese father and Filipina mother, but MPs who investigated the scam centre operations accused her of being a Chinese national named Guo… [+966 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bbc-news",
    //         "name": "BBC News"
    //     },
    //     "author": "BBC News",
    //     "title": "Sweden's 'Queen of Trash' on trial for dumping mountains of waste",
    //     "description": "Bella Nilsson is one of 11 people charged in Sweden's biggest ever environmental crime trial.",
    //     "url": "https://www.bbc.co.uk/news/articles/c4gd4gn9dy8o",
    //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e688/live/8b33e200-6a17-11ef-8aac-dd660c1eaaee.jpg",
    //     "publishedAt": "2024-09-04T01:52:13.0151685Z",
    //     "content": "Entering Attunda district court north of Stockholm, Ms Nilsson refused to answer reporters' questions.\r\nProsecutors said the way the company mismanaged the waste led to harmful levels of carcinogenic… [+1076 chars]"
    // }
  
  ]

constructor()
{
  super();
  this.state={loading:false,
               articles:this.articles,
               page:1,
               totalResults:10,
             }
}

componentDidMount()
{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=f7188662d4e04fa0a59770edaf596161&pageSize=${this.props.pageSize}`;
  let data=fetch(url);
  this.setState({loading:true});
  data.then((val1)=>{
    return val1.json();
  
}).then((val2)=>
{
   console.log(val2);
   this.setState({articles:val2.articles,
    totalResults:val2.totalResults,
    loading:false})
})

}

handlePrev=()=>
{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=f7188662d4e04fa0a59770edaf596161&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data=fetch(url);
        this.setState({loading:true});
        data.then((val1)=>{
          return val1.json();
        
      }).then((val2)=>
      {
      //  console.log(val2);
        this.setState({articles:val2.articles,
          page:this.state.page-1,
          loading:false
        })
      })
}

handleNext=()=>
{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=f7188662d4e04fa0a59770edaf596161&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data=fetch(url);
      this.setState({loading:true});
      data.then((val1)=>{
        return val1.json();
      
    }).then((val2)=>
    {
    //    console.log(val2);
      this.setState({articles:val2.articles,
        page:this.state.page+1,
        loading:false
      });

    })
}
  render() 
  {
    return (
        <>
        
      <div className='container'>
         <h1 className='text-center'>Top headlines in the US right now</h1>
          {this.state.loading&&<Loader/>}
            <div className="row">
                {!this.state.loading&&this.state.articles.map((element)=>
                    <div key={element.url}className="col-md-4">
                    <NewsComponent title={element.title}description={element.description} imgUrl={element.urlToImage==null?"https://s.yimg.com/ny/api/res/1.2/EP5LAikseAvPJdta7h4OCQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/b6ba4780-6fc0-11ef-9fe7-486ca4f8b9e5":element.urlToImage}toUrl={element.url}/>
                    </div>
                    )}
              </div> 
              
      </div>
      {!this.state.loading&&<div className='container d-flex justify-content-between '>
      <button disabled={this.state.page===1}type="button" className="btn btn-dark"onClick={this.handlePrev}>Previous</button>
      <button disabled={this.state.page>(Math.floor(this.state.totalResults/12))}type="button" className="btn btn-dark" onClick={this.handleNext}>Next</button>
      </div>}
      </>

    )
  }
}

export default News
