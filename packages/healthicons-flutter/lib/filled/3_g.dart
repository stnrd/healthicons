import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg3G extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg3G({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9134 9.40788C13.5165 7.95197 14.4004 6.6291 15.5147 5.5148L14.1005 4.10059C12.8005 5.40061 11.7693 6.94395 11.0657 8.64251C10.3621 10.3411 10 12.1616 10 14.0001C10 15.8386 10.3621 17.6591 11.0657 19.3576C11.7693 21.0562 12.8005 22.5996 14.1005 23.8996L15.5147 22.4854C14.4004 21.3711 13.5165 20.0482 12.9134 18.5923C12.3104 17.1364 12 15.5759 12 14.0001C12 12.4242 12.3104 10.8638 12.9134 9.40788Z" fill="#333333"/>
<path d="M32.4853 5.5148C33.5996 6.6291 34.4835 7.95197 35.0866 9.40788C35.6896 10.8638 36 12.4242 36 14.0001C36 15.5759 35.6896 17.1364 35.0866 18.5923C34.4835 20.0482 33.5996 21.3711 32.4853 22.4854L33.8995 23.8996C35.1995 22.5996 36.2308 21.0562 36.9343 19.3577C37.6379 17.6591 38 15.8386 38 14.0001C38 12.1616 37.6379 10.3411 36.9343 8.64251C36.2308 6.94396 35.1995 5.40061 33.8995 4.10059L32.4853 5.5148Z" fill="#333333"/>
<path d="M28.2426 9.75748C28.7998 10.3146 29.2418 10.9761 29.5433 11.704C29.8448 12.432 30 13.2122 30 14.0001C30 14.788 29.8448 15.5683 29.5433 16.2962C29.2418 17.0242 28.7998 17.6856 28.2426 18.2428L29.6569 19.657C30.3997 18.9141 30.989 18.0322 31.391 17.0616C31.7931 16.091 32 15.0507 32 14.0001C32 12.9495 31.7931 11.9093 31.391 10.9386C30.989 9.96804 30.3997 9.08613 29.6569 8.34326L28.2426 9.75748Z" fill="#333333"/>
<path d="M19.7574 9.75748C19.2002 10.3146 18.7583 10.9761 18.4567 11.704C18.1552 12.432 18 13.2122 18 14.0001C18 14.788 18.1552 15.5683 18.4567 16.2962C18.7583 17.0242 19.2002 17.6856 19.7574 18.2428L18.3431 19.657C17.6003 18.9141 17.011 18.0322 16.609 17.0616C16.2069 16.091 16 15.0507 16 14.0001C16 12.9495 16.2069 11.9093 16.609 10.9386C17.011 9.96804 17.6003 9.08613 18.3431 8.34326L19.7574 9.75748Z" fill="#333333"/>
<path d="M26 14C26 15.1046 25.1046 16 24 16C22.8954 16 22 15.1046 22 14C22 12.8954 22.8954 12 24 12C25.1046 12 26 12.8954 26 14Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 26C11.3431 26 10 27.3431 10 29V41C10 42.6569 11.3431 44 13 44H35C36.6569 44 38 42.6569 38 41V29C38 27.3431 36.6569 26 35 26H13ZM20 32.25C20 31.5799 19.4388 31 18.7009 31H17.1682C16.5907 31 16.1138 31.36 15.9405 31.8397C15.7529 32.3591 15.1798 32.6281 14.6603 32.4405C14.1409 32.2529 13.8719 31.6798 14.0595 31.1603C14.5174 29.8922 15.7437 29 17.1682 29H18.7009C20.5025 29 22 30.4349 22 32.25C22 33.1292 21.6487 33.9191 21.0817 34.5C21.6487 35.0809 22 35.8708 22 36.75C22 38.5651 20.5025 40 18.7009 40H17.1682C15.7437 40 14.5174 39.1078 14.0595 37.8397C13.8719 37.3202 14.1409 36.7471 14.6603 36.5595C15.1798 36.3719 15.7529 36.6409 15.9405 37.1603C16.1138 37.64 16.5907 38 17.1682 38H18.7009C19.4388 38 20 37.4201 20 36.75C20 36.0799 19.4388 35.5 18.7009 35.5H17.1682C16.616 35.5 16.1682 35.0523 16.1682 34.5C16.1682 33.9477 16.616 33.5 17.1682 33.5H18.7009C19.4388 33.5 20 32.9201 20 32.25ZM32.6739 30.3619C33.0856 30.7301 33.1208 31.3623 32.7526 31.7739C32.3844 32.1856 31.7522 32.2208 31.3406 31.8526C30.8744 31.4356 30.3041 31.1502 29.6884 31.0278C29.0088 30.8926 28.3044 30.962 27.6642 31.2271C27.024 31.4923 26.4769 31.9414 26.0919 32.5175C25.7069 33.0936 25.5014 33.771 25.5014 34.4639C25.5014 35.1569 25.7069 35.8342 26.0919 36.4104C26.4769 36.9865 27.024 37.4356 27.6642 37.7007C28.3044 37.9659 29.0088 38.0353 29.6884 37.9001C30.1642 37.8055 30.6128 37.6136 31.0073 37.3389V35.4639H29.0049C28.4526 35.4639 28.0049 35.0162 28.0049 34.4639C28.0049 33.9117 28.4526 33.4639 29.0049 33.4639H32.0073C32.5595 33.4639 33.0073 33.9117 33.0073 34.4639V37.8206C33.0073 38.1052 32.886 38.3763 32.6739 38.566C31.9417 39.221 31.0458 39.6693 30.0786 39.8617C29.011 40.074 27.9045 39.965 26.8988 39.5485C25.8932 39.132 25.0337 38.4266 24.429 37.5215C23.8242 36.6165 23.5014 35.5524 23.5014 34.4639C23.5014 33.3755 23.8242 32.3114 24.429 31.4064C25.0337 30.5013 25.8932 29.7959 26.8988 29.3794C27.9045 28.9628 29.011 28.8538 30.0786 29.0662C31.0458 29.2586 31.9417 29.7069 32.6739 30.3619Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}