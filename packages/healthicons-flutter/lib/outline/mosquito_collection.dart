import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MosquitoCollection extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MosquitoCollection({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4995 4C24.0518 4 24.4995 4.44772 24.4995 5V11.3174C24.7267 11.4715 24.9147 11.6638 25.0634 11.8525C25.0963 11.8943 25.1284 11.9372 25.1599 11.9813L26.8593 10.5651C26.9818 10.463 27.1269 10.3917 27.2826 10.3571L30.2826 9.69046C30.8217 9.57065 31.3559 9.91059 31.4757 10.4497C31.5955 10.9889 31.2555 11.523 30.7164 11.6428L27.9533 12.2569L26.1397 13.7682C26.0932 13.8069 26.0443 13.8407 25.9935 13.8696C25.9998 13.8921 26.006 13.9146 26.0122 13.9373L37.1856 15.2235L37.3808 15.8416C37.6318 16.6362 37.5318 17.7623 36.5984 18.6523C35.7042 19.505 34.1917 20 31.9147 20C29.5317 20 27.9008 19.2592 26.8664 18.198C26.7324 18.0605 26.6099 17.9191 26.4982 17.7752C26.4991 17.8499 26.4995 17.9248 26.4995 18C26.4995 18.3787 26.4884 18.7516 26.4668 19.1158C26.5027 19.1348 26.5378 19.1562 26.5719 19.18L28.8203 20.7497C28.9138 20.8149 28.9953 20.8956 29.0616 20.9883L30.2729 22.6836L32.2907 23.1905C32.8263 23.3251 33.1515 23.8684 33.0169 24.404C32.8824 24.9397 32.3391 25.2648 31.8034 25.1303L29.4292 24.5338C29.1991 24.4761 28.9971 24.3383 28.8592 24.1453L27.5343 22.2911L26.1824 21.3473C26.1016 21.74 26.0065 22.1089 25.8984 22.4484L27.5158 23.803C27.7986 24.0399 27.928 24.4131 27.8526 24.7742L27.3804 27.0341L28.1673 27.8211C30.5521 27.6328 32.6582 27.3057 34.3286 26.8881C35.4736 26.6019 36.335 26.2922 36.9205 26C36.3646 25.7225 35.5599 25.4293 34.5 25.1554V23.0952C37.5792 23.8243 39.5 24.856 39.5 26V29.667C39.5 30.4684 39.0614 31.1053 38.5 31.5945V39.3078C38.5 40.3634 37.7054 41.1094 36.9289 41.5936C36.0997 42.1106 34.9663 42.5396 33.6545 42.8855C31.0162 43.5813 27.4264 44 23.5 44C19.5736 44 15.9838 43.5813 13.3455 42.8855C12.0337 42.5396 10.9003 42.1106 10.0711 41.5936C9.29461 41.1094 8.5 40.3634 8.5 39.3078V31.5945C7.93861 31.1053 7.5 30.4684 7.5 29.667V26C7.5 24.8561 9.42077 23.8243 12.5 23.0952V25.1554C11.44 25.4293 10.6354 25.7225 10.0795 26C10.665 26.2922 11.5264 26.6019 12.6714 26.8881C14.4316 27.3282 16.6757 27.6677 19.2198 27.8503L20.0359 27.0342L19.5637 24.7742C19.4974 24.4569 19.589 24.127 19.8096 23.8894L21.1126 22.4856C21.014 22.1809 20.9261 21.852 20.8497 21.503L19.9017 22.2634L18.5571 24.1454C18.4191 24.3384 18.2171 24.4761 17.987 24.5339L15.6128 25.1303C15.0772 25.2649 14.5339 24.9397 14.3993 24.4041C14.2648 23.8684 14.5899 23.3251 15.1256 23.1906L17.1434 22.6837L18.3547 20.9883C18.408 20.9138 18.4712 20.8469 18.5427 20.7896L20.4997 19.2199C20.5119 19.2101 20.5243 19.2006 20.5368 19.1915C20.5122 18.8034 20.4995 18.405 20.4995 18C20.4995 17.9248 20.5 17.8499 20.5008 17.7752C20.3891 17.9191 20.2666 18.0605 20.1326 18.198C19.0982 19.2592 17.4673 20 15.0844 20C12.8073 20 11.2948 19.505 10.4006 18.6523C9.46718 17.7623 9.36718 16.6362 9.61818 15.8416L9.81342 15.2235L20.9868 13.9373C20.993 13.9146 20.9992 13.8921 21.0055 13.8697C20.9547 13.8407 20.9058 13.8069 20.8593 13.7682L19.0457 12.2569L16.2826 11.6429C15.7434 11.523 15.4035 10.9889 15.5233 10.4497C15.6431 9.9106 16.1773 9.57067 16.7164 9.69048L19.7164 10.3571C19.8721 10.3917 20.0172 10.463 20.1397 10.5651L21.8391 11.9813C21.8706 11.9372 21.9027 11.8943 21.9356 11.8525C22.0843 11.6638 22.2723 11.4715 22.4995 11.3175V5C22.4995 4.44772 22.9472 4 23.4995 4ZM22.1108 24.35L21.6271 24.8711L22.1042 27.1544C22.1653 27.4467 22.0923 27.7488 21.9093 27.9798C22.4312 27.9931 22.9619 28 23.5 28C24.1786 28 24.8454 27.9891 25.4979 27.9681C25.3216 27.7386 25.252 27.4418 25.3121 27.1544L25.7723 24.9516L24.9602 24.2714C24.6294 24.6468 24.1428 25 23.4995 25C22.9014 25 22.4387 24.6947 22.1108 24.35ZM35.3692 17.0277C35.3301 17.086 35.2805 17.1455 35.2182 17.2048C34.864 17.5426 33.9698 18 31.9147 18C29.9655 18 28.8888 17.4075 28.2986 16.802C28.0967 16.5948 27.9411 16.3754 27.8232 16.159L35.3692 17.0277ZM11.6299 17.0277C11.6689 17.086 11.7185 17.1455 11.7808 17.2048C12.135 17.5426 13.0293 18 15.0844 18C17.0335 18 18.1102 17.4075 18.7004 16.802C18.9023 16.5948 19.0579 16.3754 19.1758 16.159L11.6299 17.0277ZM19.9218 29.8996C19.6074 30.0525 19.2295 30.0309 18.9331 29.8347C14.8865 29.5339 11.5105 28.8437 9.5 27.938V29.667C9.5 29.6789 9.5242 29.9444 10.2121 30.3781C10.85 30.7802 11.8394 31.1794 13.1511 31.5292C15.7597 32.2248 19.419 32.667 23.5 32.667C27.581 32.667 31.2403 32.2248 33.8489 31.5292C35.1606 31.1794 36.15 30.7802 36.7879 30.3781C37.4758 29.9444 37.5 29.6789 37.5 29.667V27.938C35.5676 28.8086 32.3735 29.48 28.535 29.7979C28.2185 30.0377 27.7919 30.0641 27.4511 29.8771C26.1874 29.9573 24.8636 30 23.5 30C22.2699 30 21.0722 29.9653 19.9218 29.8996ZM37.6302 25.5371C37.6312 25.5372 37.6256 25.5453 37.6102 25.5609C37.6214 25.5448 37.6291 25.5369 37.6302 25.5371ZM9.36984 25.5371C9.3709 25.5369 9.37862 25.5448 9.38982 25.5609C9.37438 25.5453 9.36878 25.5372 9.36984 25.5371ZM34.3643 33.4617C35.1441 33.2537 35.8636 33.0183 36.5 32.7549V39.3044L36.4994 39.3059C36.4934 39.3279 36.4349 39.5446 35.8707 39.8964C35.2831 40.2628 34.3662 40.6294 33.1445 40.9516C30.7158 41.5922 27.3056 42 23.5 42C19.6944 42 16.2842 41.5922 13.8555 40.9516C12.6338 40.6294 11.7169 40.2628 11.1293 39.8964C10.565 39.5446 10.5066 39.3279 10.5006 39.3059L10.5001 39.3041L10.5 32.7549C11.1364 33.0183 11.8558 33.2537 12.6357 33.4617C15.456 34.2137 19.2967 34.667 23.5 34.667C27.7033 34.667 31.544 34.2137 34.3643 33.4617ZM22.4995 18C22.4995 16.4207 22.7144 15.0325 23.034 14.0736C23.1929 13.5969 23.3603 13.2794 23.4995 13.0993C23.6387 13.2794 23.8061 13.5969 23.965 14.0736C24.2847 15.0325 24.4995 16.4207 24.4995 18C24.4995 19.5793 24.2847 20.9675 23.965 21.9264C23.8061 22.4031 23.6387 22.7206 23.4995 22.9007C23.3603 22.7206 23.1929 22.4031 23.034 21.9264C22.7144 20.9675 22.4995 19.5793 22.4995 18ZM23.3814 23.0244C23.3801 23.0252 23.3794 23.0258 23.3794 23.0259C23.3794 23.0261 23.3816 23.025 23.3861 23.0218C23.384 23.0228 23.3825 23.0237 23.3814 23.0244Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}