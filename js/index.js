function playSound() {
  var audio = new Audio();
  var playlist = new Array(
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b7/Sombra_-_Initiating_the_hack.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/76/Sombra_-_Qu%C3%A9_onda.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9d/Sombra_-_Always_leave_yourself_a_back_door.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/14/Sombra_-_Cheers%2C_love.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/47/Sombra_-_I_knew_you_were_good_for_something.flac",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f3/Sombra_-_Hack_the_planet.ogg",
    //"https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/b/bf/Sombra_-_Everything_can_be_hacked..._and_everyone.ogg",
    //"https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/e/e3/Sombra_-_So_many_targets%2C_so_little_time.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/c/c9/Sombra_-_Reboot_and_try_again.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a0/Sombra_-_Ya_estoy_lista_para_ese_trago.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/99/Sombra_-_I%E2%80%99m_on_fire%21_Touch_me%2C_and_you%E2%80%99ll_get_burned.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/6f/Sombra_-_Someone_has_to_pull_their_weight_around_here.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/28/Sombra_-_Sombra_online.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/6b/Sombra_-_Oh%2C_pobrecito.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2c/Sombra_-_Camar%C3%B3n_que_se_duerme_se_lo_lleva_la_corriente.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/75/Sombra_-_Ah%C3%B3rranos_tiempo_y_no_te_levantes..ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/c/c6/Sombra_-_Ah%C3%AD_nos_vidrios.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/32/Sombra_-_Taradita.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/65/Sombra_-_Me_hace_lo_que_el_viento_a_Ju%C3%A1rez.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/fe/Sombra_-_%C2%A1Ja%21_%C2%A1Me_la_rif%C3%A9%21.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5e/Sombra_-_Where%27s_the_fun_in_playing_fair.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/41/Sombra_-_Boop%21.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9f/Sombra_-_De_pelos.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/dd/Sombra_-_You%27re_just_a_glitch_in_the_system.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9c/Sombra_-_Mess_with_the_best_and_die_like_the_rest.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2c/Sombra_-_%C2%A1As%C3%BAstame%2C_Pante%C3%B3n%21.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/90/Que_pex.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/42/Sombra_-_I_know_who%27s_been_naughty.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/51/Sombra_-_I_can_be_nice.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/61/Sombra_-_If_you_hold_the_information%2C_you_hold_all_the_cards.ogg"
  );
  var played = [];
  audio.src = playlist[Math.floor(Math.random() * playlist.length)];
  audio.play();
  switch (audio.src) {
    case playlist[0]:
      text = "Initiating the hack.";
      break;
    case playlist[1]:
      text = "Qué onda.";
      break;
    case playlist[2]:
      text = "Always leave yourself a backdoor.";
      break;
    case playlist[3]:
      text = "Cheers, love! Hahahaha.";
      break;
    // case playlist[4]:
    //   text = "Everything can be hacked... and everyone.";
    //   break;
    // case playlist[5]:
    //   text = "So many targets, so little time.";
    //   break;
    case playlist[4]:
      text = "I knew you were good for something.";
      break;
    case playlist[5]:
      text = "Hack the planet.";
      break;
    case playlist[6]:
      text = "Reboot and try again.";
      break;
    case playlist[7]:
      text = "Ya estoy lista para ese trago.";
      break;
    case playlist[8]:
      text = "I'm on fire! Touch me and you'll get burned.";
      break;
    case playlist[9]:
      text = "Someone has to pull their weight around here.";
      break;
    case playlist[10]:
      text = "Sombra online.";
      break;
    case playlist[11]:
      text = "Ay, pobrecito.";
      break;
    case playlist[12]:
      text = "Camarón que se duerme se lo lleva la corriente.";
      break;
    case playlist[13]:
      text = "Ahorranos tiempo y no te levantes.";
      break;
    case playlist[14]:
      text = "Ahí nos vidrios.";
      break;
    case playlist[15]:
      text = "Taradita.";
      break;
    case playlist[16]:
      text = "Me hace lo que el viento a Juárez.";
      break;
    case playlist[17]:
      text = "Ja! Me la rifé!";
      break;
    case playlist[18]:
      text = "Where's the fun in playing fair?";
      break;
    case playlist[19]:
      text = "Boop!";
      break;
    case playlist[20]:
      text = "De pelos!";
      break;
    case playlist[21]:
      text = "You're just a glitch in the system.";
      break;
    case playlist[22]:
      text = "Mess with the best and die like the rest.";
      break;
    case playlist[23]:
      text = "Asústame, panteón.";
      break;
    case playlist[24]:
      text = "Qué pex?";
      break;
    case playlist[25]:
      text = "I know who's been naughty.";
      break;
    case playlist[26]:
      text = "I can be nice.";
      break;
    case playlist[27]:
      text = "If you hold the information, you hold all the cards.";
      break;
  }
  document.getElementById("text").classList.remove("ani");
// offsetWidth triggers reflow
void document.getElementById("text").offsetWidth;
document.getElementById("text").classList.add("ani");
document.getElementById("text").innerText = '"' + text + '"';
  


}