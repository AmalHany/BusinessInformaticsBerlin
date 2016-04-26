app.controller('cartremoverController', ['$scope', '$resource', function ($scope, $resource) {
	var Cart = $resource('/api/carts');


	Cart.query(function (results) {
    products = $cart->getCart();

{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'delete'},
  'delete': {method:'delete'} };

  var deleteditem = item.get({ItemId:123}, function() {
  deleteditem.abc = true;
  deleteditem.$save();
});

  session_start();
  require_once( "config.php" );
  require_once( "cart.php" );

public function removeFromCart() {
    id = intval( GET["itemId"] );
    if(id > 0) {
      if(SESSION[ 'cart' ] != "") {
        $cart = json_decode( $_SESSION['cart'], true);
        for($i=0; $i<count($cart); $i++){
          if($cart[$i][ "product" ] == $id){
            $cart[$i][ "count" ] = $cart[$i]["count"]-1;
            if($cart[$i][ "count" ] < 1){
              unset($cart[$i]);
            }
            break;
          }
        }
        $cart = array_values($cart);
        $_SESSION['cart'] = json_encode($cart);
      }
    }
  }
  
                         
    }
    };
  });
	<td>
          <td> align="left"><php print $product->count; </td>
          <td> align="left">$<php print $product->total; </td>
          <td> align="center"><span style="cursor:pointer;" 
          class="removeFromCart" itemId="<?php print $product->id; ?>">remove one element</span> 
          </td>
        
	$( "span.delete" ).on( "click" , function() {
    var id = $(this).attr( "itemId" );
    $.ajax({
      type: "GET",
      url: "ajax.php?id=" + id + "&action=remove"
    })
    .done(function()
    {
      alert("Product have been removed.");
      location.reload();
    });
  });

