import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UnPavedRoad extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UnPavedRoad({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM16.5442 16.5449C17.8334 15.2556 19.2157 14.0692 20.6781 12.9943C20.7445 12.9046 20.8219 12.8209 20.9103 12.7453C21.54 12.2069 22.4869 12.281 23.0252 12.9106C23.5636 13.5403 23.4896 14.4871 22.8599 15.0255C22.8006 15.0762 22.7385 15.1214 22.6742 15.1613C23.1685 15.7234 23.6813 16.3086 24.2069 16.91C24.2901 16.7649 24.3992 16.6314 24.5336 16.5164C25.1633 15.9781 26.1101 16.0521 26.6485 16.6817C27.1869 17.3114 27.1129 18.2582 26.4832 18.7966C26.3563 18.9051 26.2165 18.9887 26.0698 19.0479C26.5363 19.5847 27.0071 20.1274 27.4789 20.6721C27.5589 20.5417 27.6604 20.4215 27.7829 20.3167C28.4126 19.7784 29.3594 19.8524 29.8978 20.482C30.4361 21.1117 30.3621 22.0585 29.7325 22.5969C29.6143 22.6979 29.485 22.7773 29.3494 22.8356C29.8185 23.3792 30.2838 23.9191 30.7416 24.4509C30.8194 24.3288 30.9164 24.216 31.0322 24.117C31.6618 23.5786 32.6087 23.6527 33.147 24.2823C33.6854 24.912 33.6114 25.8588 32.9817 26.3972C32.8681 26.4944 32.744 26.5716 32.614 26.6292L32.621 26.6374C31.4071 27.3784 30.2824 28.2625 29.2721 29.2728C27.6007 30.9443 26.2748 32.9286 25.3702 35.1124C24.7213 36.679 24.2983 38.3262 24.111 40.0048C23.9885 41.1026 23.1046 42.0007 22 42.0007H8.00003C6.89546 42.0007 5.99423 41.1046 6.05557 40.0017C6.28048 35.9575 7.18664 31.9752 8.74037 28.2241C10.5495 23.8564 13.2013 19.8878 16.5442 16.5449ZM23.3725 23.4307L24.0958 22.7402L22.7147 21.2935L21.9914 21.9841C21.4092 22.5399 20.8499 23.1211 20.3146 23.7256L19.6516 24.4742L21.1489 25.8002L21.8119 25.0515C22.3106 24.4883 22.8312 23.9474 23.3725 23.4307ZM19.1083 28.6537L19.6433 27.8088L17.9535 26.7389L17.4186 27.5837C16.5644 28.9327 15.8094 30.3561 15.1613 31.8388L14.7608 32.7551L16.5934 33.5561L16.9939 32.6399C17.6019 31.2489 18.3093 29.9156 19.1083 28.6537ZM15.4948 36.9019L15.7568 35.9368L13.8266 35.4129L13.5646 36.3779C13.3553 37.149 13.173 37.9307 13.0186 38.7215L12.827 39.7029L14.79 40.0862L14.9816 39.1047C15.1267 38.3613 15.2981 37.6264 15.4948 36.9019ZM42 7.5C42 8.32843 41.3284 9 40.5 9C39.6716 9 39 8.32843 39 7.5C39 6.67157 39.6716 6 40.5 6C41.3284 6 42 6.67157 42 7.5ZM40.5 14C41.3284 14 42 13.3284 42 12.5C42 11.6716 41.3284 11 40.5 11C39.6716 11 39 11.6716 39 12.5C39 13.3284 39.6716 14 40.5 14ZM42 17.5C42 18.3284 41.3284 19 40.5 19C39.6716 19 39 18.3284 39 17.5C39 16.6716 39.6716 16 40.5 16C41.3284 16 42 16.6716 42 17.5ZM40.5 22.3496C41.0523 22.3496 41.5 21.9019 41.5 21.3496C41.5 20.7973 41.0523 20.3496 40.5 20.3496C39.9477 20.3496 39.5 20.7973 39.5 21.3496C39.5 21.9019 39.9477 22.3496 40.5 22.3496ZM36.6868 7.92226C36.8029 8.74251 36.2321 9.5016 35.4119 9.61774C34.5916 9.73389 33.8325 9.1631 33.7164 8.34285C33.6003 7.52261 34.171 6.76351 34.9913 6.64737C35.8115 6.53123 36.5706 7.10202 36.6868 7.92226ZM36.113 14.5683C36.9333 14.4522 37.5041 13.6931 37.3879 12.8728C37.2718 12.0526 36.5127 11.4818 35.6925 11.5979C34.8722 11.7141 34.3014 12.4732 34.4176 13.2934C34.5337 14.1137 35.2928 14.6844 36.113 14.5683ZM38.0889 17.8235C38.205 18.6438 37.6342 19.4028 36.814 19.519C35.9937 19.6351 35.2346 19.0643 35.1185 18.2441C35.0024 17.4239 35.5731 16.6648 36.3934 16.5486C37.2136 16.4325 37.9727 17.0033 38.0889 17.8235ZM37.5151 24.4695C38.3354 24.3534 38.9062 23.5943 38.79 22.7741C38.6739 21.9538 37.9148 21.383 37.0946 21.4992C36.2743 21.6153 35.7035 22.3744 35.8197 23.1947C35.9358 24.0149 36.6949 24.5857 37.5151 24.4695ZM30.0448 9.63063C30.3844 10.3863 30.0472 11.2741 29.2915 11.6137C28.5359 11.9533 27.6481 11.616 27.3085 10.8604C26.9689 10.1047 27.3062 9.2169 28.0618 8.87731C28.8174 8.53773 29.7053 8.875 30.0448 9.63063ZM31.3413 16.1742C32.097 15.8346 32.4342 14.9468 32.0947 14.1912C31.7551 13.4355 30.8672 13.0983 30.1116 13.4379C29.356 13.7774 29.0187 14.6653 29.3583 15.4209C29.6979 16.1765 30.5857 16.5138 31.3413 16.1742ZM34.1442 18.7517C34.4838 19.5073 34.1465 20.3952 33.3909 20.7348C32.6353 21.0744 31.7474 20.7371 31.4078 19.9815C31.0683 19.2258 31.4055 18.338 32.1612 17.9984C32.9168 17.6588 33.8046 17.9961 34.1442 18.7517ZM34.5745 23.5883C35.0782 23.3619 35.3031 22.77 35.0767 22.2662C34.8503 21.7625 34.2584 21.5376 33.7547 21.764C33.2509 21.9904 33.0261 22.5823 33.2524 23.0861C33.4788 23.5898 34.0707 23.8147 34.5745 23.5883ZM27.5616 13.6911C27.5616 14.1705 27.1729 14.5591 26.6935 14.5591C26.2141 14.5591 25.8254 14.1705 25.8254 13.6911C25.8254 13.2116 26.2141 12.823 26.6935 12.823C27.1729 12.823 27.5616 13.2116 27.5616 13.6911ZM29.2865 18.9019C29.766 18.9019 30.1546 18.5133 30.1546 18.0338C30.1546 17.5544 29.766 17.1658 29.2865 17.1658C28.8071 17.1658 28.4185 17.5544 28.4185 18.0338C28.4185 18.5133 28.8071 18.9019 29.2865 18.9019ZM34.5787 15.9211C34.5787 16.4005 34.19 16.7891 33.7106 16.7891C33.2312 16.7891 32.8425 16.4005 32.8425 15.9211C32.8425 15.4416 33.2312 15.053 33.7106 15.053C34.19 15.053 34.5787 15.4416 34.5787 15.9211ZM38.4662 16.0002C38.9456 16.0002 39.3343 15.6115 39.3343 15.1321C39.3343 14.6527 38.9456 14.264 38.4662 14.264C37.9868 14.264 37.5981 14.6527 37.5981 15.1321C37.5981 15.6115 37.9868 16.0002 38.4662 16.0002ZM33.5777 11.3605C33.5777 11.8399 33.189 12.2286 32.7096 12.2286C32.2302 12.2286 31.8416 11.8399 31.8416 11.3605C31.8416 10.8811 32.2302 10.4924 32.7096 10.4924C33.189 10.4924 33.5777 10.8811 33.5777 11.3605ZM38.132 10.9999C38.6114 10.9999 39.0001 10.6113 39.0001 10.1319C39.0001 9.65244 38.6114 9.26379 38.132 9.26379C37.6526 9.26379 37.2639 9.65244 37.2639 10.1319C37.2639 10.6113 37.6526 10.9999 38.132 10.9999Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}