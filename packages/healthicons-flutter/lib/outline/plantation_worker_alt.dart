import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PlantationWorkerAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PlantationWorkerAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 14C22.7091 14 24.5 12.2091 24.5 10C24.5 7.79086 22.7091 6 20.5 6C18.2909 6 16.5 7.79086 16.5 10C16.5 12.2091 18.2909 14 20.5 14ZM20.5 12C21.6046 12 22.5 11.1046 22.5 10C22.5 8.89543 21.6046 8 20.5 8C19.3954 8 18.5 8.89543 18.5 10C18.5 11.1046 19.3954 12 20.5 12Z" fill="#333333"/>
<path d="M27 22C27 20.8954 26.1046 20 25 20V24C26.1046 24 27 23.1046 27 22Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 35C11 33.6938 10.1652 32.5825 9 32.1707V22H14V39C14 40.6569 15.3431 42 17 42C17.9556 42 18.8069 41.5532 19.3562 40.8571C19.7594 40.3463 20 39.7012 20 39L20 31H21L21 39C21 39.7012 21.2406 40.3463 21.6438 40.8571C22.1931 41.5532 23.0444 42 24 42C25.6569 42 27 40.6569 27 39V27.7178C28.5629 26.9978 31 24.91 31 21.5714C31 17.3636 27.1288 16 26.0155 16H9L9 13H7V16.7639C6.38625 17.3132 6 18.1115 6 19C6 19.8885 6.38625 20.6868 7 21.2361V32.1707C5.83481 32.5825 5 33.6938 5 35V41H7V37H9V41H11V35ZM25 26.4371L26.1631 25.9013C27.3068 25.3744 29 23.8541 29 21.5714C29 20.1769 28.3947 19.3326 27.6921 18.7824C27.3207 18.4915 26.9182 18.2843 26.5656 18.1529C26.2625 18.04 26.0716 18.0101 26.0228 18.0025C26.0093 18.0004 26.0067 18 26.0155 18H9L9 20H16V39C16 39.5523 16.4477 40 17 40C17.5523 40 18 39.5523 18 39L18 29H23L23 39C23 39.5523 23.4477 40 24 40C24.5523 40 25 39.5523 25 39V26.4371Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.754 17.6849C37.4783 18.0014 37.2055 18.2673 37 18.4556V20.94C37.3954 20.5493 37.8915 20.3348 38.3292 20.2107C38.7753 20.0842 39.2352 20.0308 39.6305 20.0106C40.0299 19.9903 40.3917 20.0025 40.6524 20.0194C40.7836 20.0279 40.8915 20.0377 40.9685 20.0457C41.007 20.0497 41.0379 20.0532 41.0603 20.0559L41.0874 20.0592L41.0959 20.0603L41.0989 20.0607L41.1001 20.0609C41.5569 20.1221 41.9137 20.4883 41.9626 20.9466L41.9627 20.9483L41.963 20.9512L41.9639 20.9598L41.9665 20.987C41.9686 21.0096 41.9713 21.0408 41.9743 21.0797C41.9803 21.1574 41.9874 21.2665 41.9926 21.3991C42.0029 21.6626 42.0064 22.028 41.9769 22.4302C41.9477 22.8285 41.8844 23.2902 41.7499 23.7359C41.6182 24.1728 41.3962 24.668 41.0016 25.0585C40.6059 25.4501 40.1092 25.665 39.6709 25.7893C39.2247 25.9158 38.7648 25.9692 38.3696 25.9894C37.9702 26.0097 37.6083 25.9975 37.3477 25.9806C37.2165 25.9721 37.1086 25.9622 37.0316 25.9543L37 25.951V34.94C37.3954 34.5493 37.8915 34.3348 38.3292 34.2107C38.7753 34.0842 39.2352 34.0308 39.6305 34.0106C40.0299 33.9903 40.3917 34.0025 40.6524 34.0194C40.7836 34.0279 40.8915 34.0378 40.9685 34.0457C41.007 34.0497 41.0379 34.0532 41.0603 34.0559L41.0874 34.0592L41.0959 34.0603L41.1001 34.0609C41.5569 34.1221 41.9137 34.4883 41.9626 34.9466L41.9627 34.9483L41.963 34.9512L41.9639 34.9598L41.9665 34.987C41.9686 35.0096 41.9713 35.0408 41.9743 35.0797C41.9803 35.1574 41.9874 35.2665 41.9926 35.3992C42.0029 35.6626 42.0064 36.028 41.9769 36.4302C41.9477 36.8285 41.8844 37.2902 41.7499 37.7359C41.6182 38.1728 41.3962 38.668 41.0016 39.0585C40.6059 39.4501 40.1092 39.665 39.6709 39.7893C39.2247 39.9158 38.7648 39.9692 38.3696 39.9894C37.9702 40.0097 37.6083 39.9975 37.3477 39.9806C37.2165 39.9721 37.1086 39.9623 37.0316 39.9543L37 39.951V40.9999C37 41.5522 36.5523 41.9999 36 41.9999C35.4477 41.9999 35 41.5522 35 40.9999V32.951L34.9685 32.9543C34.8915 32.9622 34.7836 32.9721 34.6524 32.9806C34.3917 32.9975 34.0299 33.0097 33.6305 32.9894C33.2352 32.9692 32.7753 32.9158 32.3292 32.7893C31.8909 32.665 31.3941 32.4501 30.9985 32.0585C30.6039 31.668 30.3819 31.1728 30.2501 30.7359C30.1157 30.2902 30.0524 29.8285 30.0232 29.4302C29.9937 29.028 29.9971 28.6626 30.0075 28.3992C30.0127 28.2665 30.0198 28.1574 30.0258 28.0797C30.0288 28.0408 30.0315 28.0096 30.0336 27.987L30.0362 27.9598L30.037 27.9512L30.0373 27.9483L30.0375 27.9466C30.0864 27.4883 30.4431 27.1221 30.9 27.0609L30.9041 27.0603L30.9127 27.0592L30.9398 27.0559C30.9622 27.0532 30.9931 27.0497 31.0316 27.0457C31.1086 27.0377 31.2165 27.0279 31.3477 27.0194C31.6083 27.0025 31.9702 26.9903 32.3696 27.0106C32.7648 27.0308 33.2247 27.0842 33.6709 27.2107C34.1086 27.3348 34.6046 27.5493 35 27.9399V18.4556C34.7945 18.2673 34.5217 18.0014 34.246 17.6849C33.9669 17.3645 33.667 16.972 33.4326 16.5379C33.2022 16.1113 33 15.5799 33 15C33 14.4201 33.2022 13.8887 33.4326 13.4621C33.667 13.028 33.9669 12.6355 34.246 12.3151C34.5276 11.9918 34.8062 11.7214 35.0131 11.5324C35.1173 11.4372 35.205 11.3612 35.2681 11.3078C35.2997 11.2811 35.3252 11.2599 35.3437 11.2447L35.3661 11.2265L35.3731 11.2209L35.3755 11.2189L35.3769 11.2179C35.7414 10.9277 36.259 10.9281 36.6235 11.2182L36.6245 11.2189L36.6269 11.2209L36.6339 11.2265L36.6563 11.2447C36.6748 11.2599 36.7003 11.2811 36.7319 11.3078C36.795 11.3612 36.8827 11.4372 36.9869 11.5324C37.1938 11.7214 37.4724 11.9918 37.754 12.3151C38.0331 12.6355 38.333 13.028 38.5674 13.4621C38.7978 13.8887 39 14.4201 39 15C39 15.5799 38.7978 16.1113 38.5674 16.5379C38.333 16.972 38.0331 17.3645 37.754 17.6849ZM36.246 16.3712C36.1634 16.466 36.0804 16.5557 36 16.639C35.9196 16.5557 35.8366 16.466 35.754 16.3712C35.5331 16.1175 35.333 15.8481 35.1924 15.5877C35.0478 15.3198 35 15.1241 35 15C35 14.8759 35.0478 14.6802 35.1924 14.4123C35.333 14.1519 35.5331 13.8825 35.754 13.6288C35.8366 13.534 35.9196 13.4443 36 13.361C36.0804 13.4443 36.1634 13.534 36.246 13.6288C36.4669 13.8825 36.667 14.1519 36.8076 14.4123C36.9522 14.6802 37 14.8759 37 15C37 15.1241 36.9522 15.3198 36.8076 15.5877C36.667 15.8481 36.4669 16.1175 36.246 16.3712ZM38.8748 36.1348C38.614 36.2088 38.4716 36.2974 38.4054 36.363C38.3381 36.4295 38.2454 36.5749 38.165 36.8416C38.0872 37.0995 38.0407 37.4046 38.0179 37.716C38.0107 37.8132 38.0061 37.9084 38.0033 37.9997C38.0887 37.999 38.1773 37.9966 38.2677 37.992C38.5735 37.9764 38.8725 37.9369 39.1253 37.8652C39.386 37.7912 39.5285 37.7026 39.5947 37.637C39.6619 37.5705 39.7547 37.4251 39.8351 37.1584C39.9129 36.9005 39.9594 36.5954 39.9822 36.284C39.9893 36.1868 39.994 36.0916 39.9967 36.0003C39.9114 36.001 39.8228 36.0034 39.7324 36.008C39.4266 36.0236 39.1276 36.0631 38.8748 36.1348ZM38.4054 22.363C38.4716 22.2974 38.614 22.2088 38.8748 22.1348C39.1276 22.0631 39.4266 22.0236 39.7324 22.008C39.8228 22.0034 39.9114 22.001 39.9967 22.0003C39.994 22.0916 39.9893 22.1868 39.9822 22.284C39.9594 22.5954 39.9129 22.9005 39.8351 23.1584C39.7547 23.4251 39.6619 23.5705 39.5947 23.637C39.5285 23.7026 39.386 23.7912 39.1253 23.8652C38.8725 23.9369 38.5735 23.9764 38.2677 23.992C38.1773 23.9966 38.0887 23.999 38.0033 23.9997C38.0061 23.9084 38.0107 23.8132 38.0179 23.716C38.0407 23.4046 38.0872 23.0995 38.165 22.8416C38.2454 22.5749 38.3381 22.4295 38.4054 22.363ZM32.0033 29.0003C32.0061 29.0916 32.0107 29.1868 32.0179 29.284C32.0407 29.5954 32.0872 29.9005 32.1649 30.1584C32.2454 30.4251 32.3381 30.5705 32.4054 30.637C32.4716 30.7026 32.614 30.7912 32.8748 30.8652C33.1276 30.9369 33.4266 30.9764 33.7324 30.992C33.8228 30.9966 33.9114 30.999 33.9967 30.9997C33.994 30.9084 33.9893 30.8132 33.9822 30.716C33.9594 30.4046 33.9129 30.0995 33.8351 29.8416C33.7547 29.5749 33.6619 29.4295 33.5947 29.363C33.5285 29.2974 33.386 29.2088 33.1253 29.1348C32.8725 29.0631 32.5735 29.0236 32.2677 29.008C32.1773 29.0034 32.0887 29.001 32.0033 29.0003Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}