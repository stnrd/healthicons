import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Network4G extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Network4G({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 30C21 29.5562 20.7076 29.1656 20.2818 29.0405C19.856 28.9155 19.3988 29.086 19.1588 29.4592L14.6588 36.4592C14.461 36.767 14.447 37.1581 14.6223 37.4792C14.7976 37.8003 15.1342 38 15.5 38H19V39C19 39.5523 19.4477 40 20 40C20.5523 40 21 39.5523 21 39V38C21.5523 38 22 37.5523 22 37C22 36.4477 21.5523 36 21 36V30ZM17.3317 36L19 33.4048V36H17.3317Z" fill="#333333"/>
<path d="M32.6739 30.362C33.0856 30.7302 33.1208 31.3624 32.7526 31.774C32.3844 32.1857 31.7522 32.2209 31.3406 31.8527C30.8744 31.4358 30.3041 31.1504 29.6884 31.0279C29.0088 30.8927 28.3044 30.9621 27.6642 31.2273C27.024 31.4924 26.4769 31.9415 26.0919 32.5176C25.7069 33.0938 25.5014 33.7711 25.5014 34.4641C25.5014 35.157 25.7069 35.8343 26.0919 36.4105C26.4769 36.9866 27.024 37.4357 27.6642 37.7009C28.3044 37.966 29.0088 38.0354 29.6884 37.9002C30.1642 37.8056 30.6128 37.6137 31.0073 37.339V35.4641H29.0049C28.4526 35.4641 28.0049 35.0163 28.0049 34.4641C28.0049 33.9118 28.4526 33.4641 29.0049 33.4641H32.0073C32.5595 33.4641 33.0073 33.9118 33.0073 34.4641V37.8208C33.0073 38.1053 32.886 38.3764 32.6739 38.5661C31.9417 39.2211 31.0458 39.6694 30.0786 39.8618C29.011 40.0742 27.9045 39.9652 26.8988 39.5486C25.8932 39.1321 25.0337 38.4267 24.429 37.5216C23.8242 36.6166 23.5014 35.5525 23.5014 34.4641C23.5014 33.3756 23.8242 32.3115 24.429 31.4065C25.0337 30.5014 25.8932 29.796 26.8988 29.3795C27.9045 28.963 29.011 28.854 30.0786 29.0663C31.0458 29.2587 31.9417 29.707 32.6739 30.362Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM13 26C11.3431 26 10 27.3431 10 29V41C10 42.6569 11.3431 44 13 44H35C36.6569 44 38 42.6569 38 41V29C38 27.3431 36.6569 26 35 26H13ZM35.0866 9.4078C34.4835 7.9519 33.5996 6.62903 32.4853 5.51472L33.8995 4.10051C35.1995 5.40053 36.2308 6.94388 36.9343 8.64244C37.6379 10.341 38 12.1615 38 14C38 15.8385 37.6379 17.659 36.9343 19.3576C36.2307 21.0561 35.1995 22.5995 33.8995 23.8995L32.4853 22.4853C33.5996 21.371 34.4835 20.0481 35.0866 18.5922C35.6896 17.1363 36 15.5759 36 14C36 12.4241 35.6896 10.8637 35.0866 9.4078ZM28.2426 9.7574C28.7998 10.3146 29.2417 10.976 29.5433 11.7039C29.8448 12.4319 30 13.2121 30 14C30 14.788 29.8448 15.5682 29.5433 16.2961C29.2417 17.0241 28.7998 17.6855 28.2426 18.2427L29.6569 19.6569C30.3997 18.914 30.989 18.0321 31.391 17.0615C31.7931 16.0909 32 15.0506 32 14C32 12.9495 31.7931 11.9092 31.391 10.9386C30.989 9.96797 30.3997 9.08605 29.6569 8.34319L28.2426 9.7574ZM19.7574 9.7574C19.2002 10.3146 18.7583 10.976 18.4567 11.7039C18.1552 12.4319 18 13.2121 18 14C18 14.788 18.1552 15.5682 18.4567 16.2961C18.7583 17.0241 19.2002 17.6855 19.7574 18.2427L18.3431 19.6569C17.6003 18.914 17.011 18.0321 16.609 17.0615C16.2069 16.0909 16 15.0506 16 14C16 12.9495 16.2069 11.9092 16.609 10.9386C17.011 9.96797 17.6003 9.08605 18.3431 8.34319L19.7574 9.7574ZM12.9134 9.4078C13.5165 7.9519 14.4004 6.62903 15.5147 5.51472L14.1005 4.10051C12.8005 5.40053 11.7693 6.94388 11.0657 8.64244C10.3621 10.341 10 12.1615 10 14C10 15.8385 10.3621 17.659 11.0657 19.3576C11.7693 21.0561 12.8005 22.5995 14.1005 23.8995L15.5147 22.4853C14.4004 21.371 13.5165 20.0481 12.9134 18.5922C12.3104 17.1363 12 15.5759 12 14C12 12.4241 12.3104 10.8637 12.9134 9.4078ZM26 14C26 15.1046 25.1046 16 24 16C22.8954 16 22 15.1046 22 14C22 12.8954 22.8954 12 24 12C25.1046 12 26 12.8954 26 14Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}