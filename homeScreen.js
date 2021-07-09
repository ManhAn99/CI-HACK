import {
    getUser,
    signOut
} from "../../modules/user.js";

const $template = document.createElement('template')
$template.innerHTML = `
<div class="home-screen">
<div class="home-screen-container">
  <div class="home-screen-child1">
    <div class="child1-text1">
      <h1>24hEnglish-Website học Tiếng Anh số 1 Việt Nam</h1>
    </div>

    <div class="child1-text2">
      <h4><i class="far fa-plus"></i> 100% thực hành mỗi buổi học</h4>
      <h4><i class="far fa-plus"></i> 100% giáo viên bản xứ</h4>
      <h4><i class="far fa-plus"></i> 100% cam kết đầu ra</h4>
      <h4><i class="far fa-plus"></i> Phát triển toàn diện 4 kỹ năng</h4>
    </div>
  </div>

  <div class="home-screen-child2">
    <div class="child2-content1">
      <div class="child2-content1-text1">
        <div class="text1-image" style="padding-left: 40px">
          <img
            style="width: 30px"
            src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png"
          />
        </div>
        <h3 style="padding-left: 6px">24hEnglish</h3>
      </div>

      <div class="child2-content1-text2">
        <span class = 'name-user'>24hEnglish</span><i class="fas fa-angle-down"></i>
      </div>
    </div>

    <div class="child2-content2">
      <div class="child2-content2-img">
        <!-- <img class = 'image-content2' src="./pic/content2.jpg" alt=""> -->
      </div>
    </div>

    <div class="child2-content3">
     <div class="child2-content3-1">
       <h2>Giao tiếp tiếng anh trôi chảy chỉ sau 3 tháng</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  aut quos, reprehenderit quaerat? Alias, explicabo minus.</p>
       <h5>Khám phá ngay</h5>
     </div>
     <div class="child2-content3-2">
      <div class="child2-content3-container">
        <div class="content3-child content3-speaking" data-tilt>
          <p>Speaking</p>
          <img src="https://img.icons8.com/doodle/48/000000/talk-female.png"/>
       
        </div>

        <div class="content3-child content3-listening" data-tilt>
          <p>Listening</p>
          <img
            src="https://img.icons8.com/color/48/000000/music-robot.png"
          />
        </div>

        <div class="content3-child content3-writting" data-tilt>
          <p>Writting</p>
          <img
            src="https://img.icons8.com/color/48/000000/hand-with-pen.png"
          />
        </div>

        <div class="content3-child content3-reading" data-tilt>
          <p>Reading</p>
          <img
            style="width: 60px"
            src="https://img.icons8.com/plasticine/100/000000/reading.png"
          />
        </div>

        <div class="content3-child content3-flashcard" data-tilt>
          <p>FlashCard</p>
          <img src="https://img.icons8.com/color/48/000000/quizlet.png"/>
        </div>
        <div class="content3-child content3-dic" data-tilt>
          <p>Dictionary</p>
          <img
            style="width: 50px"
            src="https://img.icons8.com/cotton/64/000000/read.png"
          />
        </div>
      </div>
     </div>

     

    
    </div>
   
  </div>
 
</div>

      <div class = 'sign-out' style="display: none;">
     <p>Sign Out <i class="far fa-sign-out"></i></p>
      </div>
</div>


`
export default class HomeScreen extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true))
        this.$child2_content1_text2 = this.querySelector('.child2-content1-text2')
        this.$signOut = this.querySelector('.sign-out')
        this.$nameUser = this.querySelector('.name-user')
    }




    async connectedCallback() {

        let data = await getUser()
        console.log(data);
        this.$nameUser.innerHTML = data.name
        this.$child2_content1_text2.addEventListener('click', async () => {

            if (this.$signOut.style.display === 'none') {
                this.$signOut.style.display = 'block';
                this.$child2_content1_text2.style.color = 'blue'
            } else {
                this.$signOut.style.display = 'none';
                this.$child2_content1_text2.style.color = 'black'
            }
        })
        this.$signOut.addEventListener('click', () => {
            signOut()
        })
    }
}
window.customElements.define('home-screen', HomeScreen)