import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class SideBar extends Component {

  render() {
    return (
      <ul className="nav nav-pills nav-stacked">
        <li role="presentation"><Link to="/category/new">new</Link></li>
        <li role="presentation"><Link to="/category/editor">editor</Link></li>
        <li role="presentation"><Link to="/category/events">events</Link></li>
        <li role="presentation"><Link to="/category/shopping_events">shopping_events</Link></li>
        <li role="presentation"><Link to="/category/winter">winter</Link></li>
        <li role="presentation"><Link to="/category/adventure">adventure</Link></li>
        <li role="presentation"><Link to="/category/arts">arts</Link></li>
        <li role="presentation"><Link to="/category/bars">bars</Link></li>
        <li role="presentation"><Link to="/category/beaches">beaches</Link></li>
        <li role="presentation"><Link to="/category/business">business</Link></li>
        <li role="presentation"><Link to="/category/castles">castles</Link></li>
        <li role="presentation"><Link to="/category/chat">chat</Link></li>
        <li role="presentation"><Link to="/category/cosmic">cosmic</Link></li>
        <li role="presentation"><Link to="/category/cyber">cyber</Link></li>
        <li role="presentation"><Link to="/category/discussions">discussions</Link></li>
        <li role="presentation"><Link to="/category/duranduran">duranduran</Link></li>
        <li role="presentation"><Link to="/category/learning">learning</Link></li>
        <li role="presentation"><Link to="/category/seamless">seamless</Link></li>
        <li role="presentation"><Link to="/category/fashion">fashion</Link></li>
        <li role="presentation"><Link to="/category/fashion/animations">fashion/animations</Link></li>
        <li role="presentation"><Link to="/category/fashion/clothing">fashion/clothing</Link></li>
        <li role="presentation"><Link to="/category/fashion/gadgets">fashion/gadgets</Link></li>
        <li role="presentation"><Link to="/category/fashion/shoes">fashion/shoes</Link></li>
        <li role="presentation"><Link to="/category/fashion/skins">fashion/skins</Link></li>
        <li role="presentation"><Link to="/category/fashion/hair">fashion/hair</Link></li>
        <li role="presentation"><Link to="/category/fashion/jewelry">fashion/jewelry</Link></li>
        <li role="presentation"><Link to="/category/fashion/tattoos">fashion/tattoos</Link></li>
        <li role="presentation"><Link to="/category/games">games</Link></li>
        <li role="presentation"><Link to="/category/games/generalgames">games/generalgames</Link></li>
        <li role="presentation"><Link to="/category/games/skillgaming">games/skillgaming</Link></li>
        <li role="presentation"><Link to="/category/howto">howto</Link></li>
        <li role="presentation"><Link to="/category/howto/freebies">howto/freebies</Link></li>
        <li role="presentation"><Link to="/category/howto/creator">howto/creator</Link></li>
        <li role="presentation"><Link to="/category/howto/newbie">howto/newbie</Link></li>
        <li role="presentation"><Link to="/category/howto/sandbox">howto/sandbox</Link></li>
        <li role="presentation"><Link to="/category/haunted">haunted</Link></li>
        <li role="presentation"><Link to="/category/home">home</Link></li>
        <li role="presentation"><Link to="/category/home/homes">home/homes</Link></li>
        <li role="presentation"><Link to="/category/home/furnishings">home/furnishings</Link></li>
        <li role="presentation"><Link to="/category/home/gardens">home/gardens</Link></li>
        <li role="presentation"><Link to="/category/international">international</Link></li>
        <li role="presentation"><Link to="/category/international/otherlanguages">international/otherlanguages</Link></li>
        <li role="presentation"><Link to="/category/international/turkish">international/turkish</Link></li>
        <li role="presentation"><Link to="/category/international/spanish">international/spanish</Link></li>
        <li role="presentation"><Link to="/category/international/russian">international/russian</Link></li>
        <li role="presentation"><Link to="/category/international/portuguese">international/portuguese</Link></li>
        <li role="presentation"><Link to="/category/international/polish">international/polish</Link></li>
        <li role="presentation"><Link to="/category/international/korean">international/korean</Link></li>
        <li role="presentation"><Link to="/category/international/japanese">international/japanese</Link></li>
        <li role="presentation"><Link to="/category/international/italian">international/italian</Link></li>
        <li role="presentation"><Link to="/category/international/german">international/german</Link></li>
        <li role="presentation"><Link to="/category/international/french">international/french</Link></li>
        <li role="presentation"><Link to="/category/international/arabic">international/arabic</Link></li>
        <li role="presentation"><Link to="/category/land">land</Link></li>
        <li role="presentation"><Link to="/category/gay">gay</Link></li>
        <li role="presentation"><Link to="/category/realms">realms</Link></li>
        <li role="presentation"><Link to="/category/media">media</Link></li>
        <li role="presentation"><Link to="/category/memorial">memorial</Link></li>
        <li role="presentation"><Link to="/category/miscellaneous">miscellaneous</Link></li>
        <li role="presentation"><Link to="/category/music">music</Link></li>
        <li role="presentation"><Link to="/category/music/countryfolk">music/countryfolk</Link></li>
        <li role="presentation"><Link to="/category/music/electronicdance">music/electronicdance</Link></li>
        <li role="presentation"><Link to="/category/music/indiealternative">music/indiealternative</Link></li>
        <li role="presentation"><Link to="/category/music/jazzblues">music/jazzblues</Link></li>
        <li role="presentation"><Link to="/category/music/livemusic">music/livemusic</Link></li>
        <li role="presentation"><Link to="/category/music/popmusic">music/popmusic</Link></li>
        <li role="presentation"><Link to="/category/music/rockmetal">music/rockmetal</Link></li>
        <li role="presentation"><Link to="/category/music/cafes">music/cafes</Link></li>
        <li role="presentation"><Link to="/category/music/hiphopsoulreggae">music/hiphopsoulreggae</Link></li>
        <li role="presentation"><Link to="/category/music/djs">music/djs</Link></li>
        <li role="presentation"><Link to="/category/nature">nature</Link></li>
        <li role="presentation"><Link to="/category/pets">pets</Link></li>
        <li role="presentation"><Link to="/category/photospots">photospots</Link></li>
        <li role="presentation"><Link to="/category/politics">politics</Link></li>
        <li role="presentation"><Link to="/category/popular">popular</Link></li>
        <li role="presentation"><Link to="/category/premium">premium</Link></li>
        <li role="presentation"><Link to="/category/premium/gifts">premium/gifts</Link></li>
        <li role="presentation"><Link to="/category/premium/sandboxes">premium/sandboxes</Link></li>
        <li role="presentation"><Link to="/category/premium/racersgulch">premium/racersgulch</Link></li>
        <li role="presentation"><Link to="/category/premium/flightzones">premium/flightzones</Link></li>
        <li role="presentation"><Link to="/category/premium/hunts">premium/hunts</Link></li>
        <li role="presentation"><Link to="/category/real">real</Link></li>
        <li role="presentation"><Link to="/category/ridesmazes">ridesmazes</Link></li>
        <li role="presentation"><Link to="/category/roleplay">roleplay</Link></li>
        <li role="presentation"><Link to="/category/roleplay/vampire">roleplay/vampire</Link></li>
        <li role="presentation"><Link to="/category/roleplay/steampunk">roleplay/steampunk</Link></li>
        <li role="presentation"><Link to="/category/roleplay/fantasy">roleplay/fantasy</Link></li>
        <li role="presentation"><Link to="/category/roleplay/historical">roleplay/historical</Link></li>
        <li role="presentation"><Link to="/category/roleplay/pirate">roleplay/pirate</Link></li>
        <li role="presentation"><Link to="/category/roleplay/scifi">roleplay/scifi</Link></li>
        <li role="presentation"><Link to="/category/roleplay/urbannoir">roleplay/urbannoir</Link></li>
        <li role="presentation"><Link to="/category/romance">romance</Link></li>
        <li role="presentation"><Link to="/category/romance/wedding">romance/wedding</Link></li>
        <li role="presentation"><Link to="/category/romance/romance_spots">romance/romance_spots</Link></li>
        <li role="presentation"><Link to="/category/sailing">sailing</Link></li>
        <li role="presentation"><Link to="/category/science">science</Link></li>
        <li role="presentation"><Link to="/category/origins">origins</Link></li>
        <li role="presentation"><Link to="/category/belief">belief</Link></li>
        <li role="presentation"><Link to="/category/sports">sports</Link></li>
        <li role="presentation"><Link to="/category/strange">strange</Link></li>
        <li role="presentation"><Link to="/category/surfing">surfing</Link></li>
        <li role="presentation"><Link to="/category/underwater">underwater</Link></li>
        <li role="presentation"><Link to="/category/wilderness">wilderness</Link></li>
        <li role="presentation"><Link to="/category/zombies">zombies</Link></li>
        <li role="presentation"><Link to="/category/adult">adult</Link></li>
        <li role="presentation"><Link to="/category/adult/clubs">adult/clubs</Link></li>
        <li role="presentation"><Link to="/category/adult/fashions">adult/fashions</Link></li>
        <li role="presentation"><Link to="/category/adult/roleplaying">adult/roleplaying</Link></li>
        <li role="presentation"><Link to="/category/adult/adult_arts">adult/adult_arts</Link></li>
        <li role="presentation"><Link to="/category/adult/newcomer">adult/newcomer</Link></li>
      </ul>
    );
  }
}

export default SideBar;
