import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pediatrics extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Pediatrics({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 8H9C8.44771 8 8 8.44772 8 9V39C8 39.5523 8.44772 40 9 40H39C39.5523 40 40 39.5523 40 39V9C40 8.44771 39.5523 8 39 8ZM9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.7777 18.5555C26.1403 18.5555 28.0555 16.6403 28.0555 14.2778C28.0555 11.9152 26.1403 10 23.7777 10C21.4152 10 19.5 11.9152 19.5 14.2778C19.5 16.6403 21.4152 18.5555 23.7777 18.5555Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.7777 17.0555C25.3118 17.0555 26.5555 15.8119 26.5555 14.2778C26.5555 12.7436 25.3118 11.5 23.7777 11.5C22.2436 11.5 21 12.7436 21 14.2778C21 15.8119 22.2436 17.0555 23.7777 17.0555ZM28.0555 14.2778C28.0555 16.6403 26.1403 18.5555 23.7777 18.5555C21.4152 18.5555 19.5 16.6403 19.5 14.2778C19.5 11.9152 21.4152 10 23.7777 10C26.1403 10 28.0555 11.9152 28.0555 14.2778Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8889 24.7776V22.4442H27.6667V24.7776H19.8889ZM19.8889 26.3332V27.8422C19.8889 28.3348 20.3326 29.5999 21.6938 30.2061C21.8496 30.2754 22.0247 30.3624 22.1821 30.4405L22.2747 30.4864C22.468 30.582 22.6552 30.6724 22.8445 30.7526C23.2392 30.9198 23.547 30.9997 23.7778 30.9997C24.0085 30.9997 24.3164 30.9198 24.7111 30.7526C24.9004 30.6724 25.0875 30.582 25.2809 30.4864L25.3735 30.4405C25.5309 30.3624 25.706 30.2754 25.8618 30.2061C27.223 29.5999 27.6667 28.3348 27.6667 27.8422V26.3332H19.8889Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.304 28.8358C22.4889 28.9181 22.6877 29.0168 22.837 29.091L22.9394 29.1418C22.9397 29.1419 22.94 29.1421 22.9403 29.1422C23.1286 29.2353 23.283 29.3093 23.4296 29.3714C23.5801 29.4352 23.6863 29.4703 23.7547 29.4883C23.7634 29.4906 23.7711 29.4925 23.7778 29.4941C23.7845 29.4925 23.7922 29.4906 23.8009 29.4883C23.8693 29.4703 23.9755 29.4352 24.1259 29.3714C24.2726 29.3093 24.427 29.2353 24.6153 29.1422C24.6156 29.142 24.6151 29.1423 24.6153 29.1422L24.7186 29.091C24.8678 29.0168 25.0667 28.9181 25.2516 28.8358C25.6211 28.6712 25.8547 28.4254 25.9996 28.1915C26.0736 28.072 26.1205 27.9615 26.1468 27.8788C26.1526 27.8607 26.1569 27.8454 26.1601 27.8332H21.3955C21.3986 27.8454 21.403 27.8607 21.4087 27.8788C21.4351 27.9615 21.4819 28.072 21.556 28.1915C21.7009 28.4254 21.9345 28.6712 22.304 28.8358ZM19.8889 26.3332H27.6667V27.8422C27.6667 28.3348 27.223 29.5999 25.8618 30.2061C25.706 30.2754 25.5309 30.3624 25.3735 30.4405L25.2809 30.4864C25.0875 30.582 24.9004 30.6724 24.7111 30.7526C24.3164 30.9198 24.0085 30.9997 23.7778 30.9997C23.547 30.9997 23.2392 30.9198 22.8445 30.7526C22.6552 30.6724 22.468 30.582 22.2747 30.4864L22.1821 30.4405C22.0247 30.3624 21.8496 30.2754 21.6938 30.2061C20.3326 29.5999 19.8889 28.3348 19.8889 27.8422V26.3332ZM19.8889 24.7776V22.4442H27.6667V24.7776H19.8889Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.096 29.9884C17.8893 31.0388 17.2248 32.3596 17.2248 34.1027C17.2248 34.7979 17.3735 35.8411 17.76 36.6866C18.1558 37.5524 18.6872 37.9997 19.3589 37.9997C20.0795 37.9997 20.6895 37.4482 20.6895 36.7384C20.6895 36.4226 20.5559 36.124 20.3444 35.6802L20.3305 35.6508C20.1389 35.2492 19.8861 34.719 19.8861 34.1027C19.8861 33.4285 20.2204 32.7129 20.6095 32.1337C20.7344 31.9478 20.8665 31.7965 21.0045 31.666C20.0851 31.2481 19.4675 30.6164 19.096 29.9884Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1666 32.9278C19.9975 33.3104 19.8861 33.7134 19.8861 34.1027C19.8861 34.719 20.1389 35.2492 20.3305 35.6508L20.3444 35.6802C20.5559 36.124 20.6895 36.4226 20.6895 36.7384C20.6895 37.4482 20.0795 37.9997 19.3589 37.9997C18.6872 37.9997 18.1558 37.5524 17.76 36.6866C17.3735 35.8411 17.2248 34.7979 17.2248 34.1027C17.2248 32.9477 17.5166 31.978 18.0646 31.1496C18.3435 30.7279 18.6889 30.3427 19.096 29.9884C19.2615 30.2682 19.4759 30.5488 19.7441 30.8108C19.8371 30.9017 19.9366 30.9904 20.0428 31.076C20.3174 31.2976 20.6368 31.4989 21.0045 31.666C20.8665 31.7965 20.7344 31.9478 20.6095 32.1337C20.4451 32.3785 20.2904 32.6477 20.1666 32.9278Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.551 31.6656C27.4704 31.2477 28.088 30.616 28.4595 29.988C29.6662 31.0384 30.3307 32.3592 30.3307 34.1022C30.3307 34.7975 30.182 35.8407 29.7955 36.6862C29.3997 37.552 28.8682 37.9993 28.1966 37.9993C27.476 37.9993 26.8659 37.4478 26.8659 36.7379C26.8659 36.4222 26.9996 36.1235 27.211 35.6797L27.225 35.6504C27.4165 35.2487 27.6694 34.7185 27.6694 34.1022C27.6694 33.428 27.335 32.7125 26.946 32.1332C26.8211 31.9473 26.689 31.7961 26.551 31.6656Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.5128 31.0756C27.2381 31.2972 26.9187 31.4985 26.551 31.6656C26.689 31.7961 26.8211 31.9473 26.946 32.1332C27.1104 32.378 27.2651 32.6472 27.3889 32.9274C27.5579 33.31 27.6694 33.713 27.6694 34.1022C27.6694 34.7185 27.4165 35.2487 27.225 35.6504L27.211 35.6797C26.9996 36.1235 26.8659 36.4222 26.8659 36.7379C26.8659 37.4478 27.476 37.9993 28.1966 37.9993C28.8682 37.9993 29.3997 37.552 29.7955 36.6862C30.182 35.8407 30.3307 34.7975 30.3307 34.1022C30.3307 32.9472 30.0389 31.9776 29.491 31.1492C29.212 30.7275 28.8666 30.3424 28.4595 29.988C28.294 30.2678 28.0796 30.5484 27.8114 30.8104C27.7184 30.9013 27.6189 30.99 27.5128 31.0756Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.497 20.0098C33.7622 21.082 33.108 22.1663 32.0357 22.4315C28.905 23.206 26.3612 23.6 23.77 23.5901C21.1844 23.5803 18.6483 23.1685 15.5415 22.4368C14.4664 22.1836 13.8 21.1067 14.0533 20.0316C14.3065 18.9564 15.3833 18.2901 16.4585 18.5433C19.4266 19.2423 21.6305 19.5819 23.7852 19.5901C25.9341 19.5983 28.1306 19.277 31.0752 18.5486C32.1475 18.2833 33.2317 18.9375 33.497 20.0098Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}