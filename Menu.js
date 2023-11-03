document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

</head>
`);
class Menu {

    head(){
        document.write(`
       
        <nav>
        <div class="head"><p><i class="fa-solid fa-cloud"></i>&nbsp;&nbsp;Admin</p>
        <div class="admin">
       
            <li class="active"><a href="#">deshboard</a></li>
            <li><a href="#">share link</a></li>
            <li><a href="#">make a copy</a></li>
            <li><a href="#">download</a></li>
        </ul>
           </div>
        </div>
        <header> 
            <input type="checkbox"id="check"name="" value="">
            <label for="check" id="checkbtn"><i class="fa fa-bars"></i></label>
            <ul>
                <li class="active"><a  href="#">home</a></li>
                <li ><a href="#">about</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">gallery</a></li>
                <li><a href="#">conntact</a></li>
            </ul>
            <input type="text" class="search-input" placeholder="Search.....">
            <a class="search-button" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
            </header>
            <div class="section">
                <div class="update">Keep an update on all the stats
                    
                        <li id="upbtnli"><a class="upbtna" href="#">Update</a></li>
                       
                </div>
                <div class="box"><p>4598</p>
                                 <div class="p1">New project</div>
                    <div class="unbox bg1"> <i class="fa-sharp fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="box"><p>6956</p>
                <div class="p1">New likes</div>
                <div class="unbox bg2"><i class="fa-solid fa-heart"></i></div>
                </div>
                <div class="box2"><p>Time,Practice</p>
                   
                    <div class="time"><a style="color:green" href="#">65%</a></div>
                    <div class="box3">
                    <a href="#"><i class="fa-solid fa-heart"></i></a></li>
                    <a href="#"><i class="fa-sharp fa-solid fa-bookmark"></i></a></li>
                    <a href="#"> <i class="fa-sharp fa-solid fa-share"></i></a></li>
                    
                    </div>
                </div>
                <div class="box"><p>386</p>
                <div class="p1">Open ticket</div>
                    <div class="unbox bg3"><i class="fa-solid fa-ticket"></i></div>
                </div>
                <div class="box"><p>2657</p>
                <div class="p1">New vistors</div>
                <div class="unbox bg4"><i class="fa-solid fa-address-book"></i></div>
                </div>
                

                <div class="sale"><p>Sale</p>
                <div class="pct">
                    <div class="pctbox"><p>30%</></div>
                    <div class="pctbox"><p>75%</></div>
                    <div class="pctbox"><p>90%</></div>
                    <div class="pctbox"><p>10%</></div>
                </div>
                    <div class="dad bgd1">
                        <div class="graph-1 bgd1-2"></div>
                    </div>
                   
                    <div class="dad bgd2">
                        <div class="graph-1 bgd2-2"></div>
                    </div>
                    <div class="dad bgd3">
                        <div class="graph-1 bgd3-2"></div>
                    </div>
                    <div class="dad bgd4">
                        <div class="graph-1 bgd4-2"></div>
                    </div>

                    <div class="dad1 ">
                    <a href="#"><i class="fa-solid fa-heart"></i></a></li>
                    <a href="#"><i class="fa-sharp fa-solid fa-bookmark"></i></a></li>
                    <a href="#"> <i class="fa-sharp fa-solid fa-share"></i></a></li>
                    </div>
                       
                   
                </div>
                
            </div>

          
        </nav>

        
        `);
       
    }

    

}