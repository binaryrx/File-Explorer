<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Page Title</title>
    <meta name="description" content="Stopwatch App">
    <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1">
    <!-- Font Awesome -->

  

    <script src="https://unpkg.com/ionicons@4.5.10-1/dist/ionicons.js"></script>

    <!-- Owl Carousel -->
    <!-- <link rel="stylesheet" href="vendor/owlCarousel/assets/owl.carousel.min.css"> -->
    <!-- <link rel="stylesheet" href="vendor/owlCarousel/assets/owl.theme.default.min.css"> -->
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <!-- Boostrap -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> -->
    
    <!-- STYLE -->
    <link rel="stylesheet" type="text/css" href="../css/main.min.css" />
  
<script>
  window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
</script>

  </head>


  <body>
   
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>

  <!-- Table -->
  <div class="container">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Size</th>
        <th scope="col">Last Modified</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="#">
            <ion-icon name="folder"></ion-icon>
            <span>
              Folder
            </span>
          </a>
        </td>
        <td>27M</td>
        <td>23/06/2019,
          10:30:19 PM</td>
      </tr>
      <tr>
        <td>
          <a href="#">
            <ion-icon name="document"></ion-icon>
            <span>
               file.txt
             </span>
          </a>
        </td>
        <td>4K</td>
        <td>23/06/2019,
          10:30:30 PM</td>
      </tr>
      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>

      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>

      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>

      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>

      
      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>

      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>

      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>
      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>
      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>
      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>
      <tr>
        <td>
          <a href="#">
            <ion-icon name="musical-notes"></ion-icon>
            <span>
              file.mp3
            </span>
          </a>  
          </td>
        <td>2M</td>
        <td>23/06/2019,
          10:31:25 PM</td>
      </tr>


    </tbody>
  </table>
</div>


<!-- Footer -->
<footer class="footer">
      <div class="container">
        <span class="text-muted">By Binary &copy <?= Date('Y');?></span>
      </div>
</footer>
    

    

    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="../js/formValidationAjax.min.js"></script>
    <script src="../js/script.min.js"></script>
    <!-- <script src="vendor/owlCarousel/owl.carousel.min.js"></script> -->
    

    <script>

      function localTime(){
      var localTime = new Date().toLocaleString();
      return localTime;
     }
      $(document).ready(function() {

      });      
    </script>

  </body>
</html>