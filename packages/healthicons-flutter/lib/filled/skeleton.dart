import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Skeleton extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Skeleton({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 14C23 15.1046 22.1046 16 21 16C19.8954 16 19 15.1046 19 14C19 12.8954 19.8954 12 21 12C22.1046 12 23 12.8954 23 14Z" fill="#333333"/>
<path d="M27 16C28.1046 16 29 15.1046 29 14C29 12.8954 28.1046 12 27 12C25.8954 12 25 12.8954 25 14C25 15.1046 25.8954 16 27 16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6154 17.3476C16.6154 19.3825 18 19.8347 18.4615 19.8347C18.9231 19.8347 19.0769 21.1912 19.0769 22.0956C19.0769 22.8707 20.998 22.9815 23 22.9974V24.5H16.5C13.6079 24.5 12.2324 26.6465 11.6175 28.4229C11.3047 29.3265 11.1523 30.2159 11.0769 30.8698C11.0389 31.1992 11.0197 31.4751 11.01 31.6713C11.0052 31.7695 11.0027 31.8482 11.0014 31.9039C11.0007 31.9318 11.0004 31.9541 11.0002 31.9702L11 31.9898L11 31.9961L11 31.9983V32C11 32.5523 11.4477 33 12 33C12.5521 33 12.9997 32.5526 13 32.0006L13.0001 31.9925L13.0005 31.9669L13.0008 31.9501C13.0017 31.9106 13.0036 31.8496 13.0076 31.7701C13.0154 31.6108 13.0314 31.3789 13.0637 31.099C13.1289 30.5341 13.2578 29.7985 13.5075 29.0771C14.0176 27.6035 14.8921 26.5 16.5 26.5H23V27.7089C22.1658 27.7564 21.3506 27.8647 20.6352 28.0389C20.1357 28.1605 19.6558 28.3212 19.2429 28.5336C18.842 28.7397 18.4234 29.0359 18.152 29.4701C17.8593 29.9384 18.0017 30.5554 18.47 30.8481C18.9383 31.1408 19.5552 30.9985 19.8479 30.5302C19.8479 30.5302 19.8634 30.5066 19.914 30.4654C19.9662 30.4227 20.0449 30.3701 20.1576 30.3121C20.3861 30.1946 20.7047 30.0804 21.1083 29.9821C21.6562 29.8487 22.3075 29.7574 23 29.7126V31.7089C22.1658 31.7564 21.3506 31.8647 20.6352 32.0389C20.1357 32.1605 19.6558 32.3212 19.2429 32.5336C18.842 32.7397 18.4234 33.0359 18.152 33.4701C17.8593 33.9384 18.0017 34.5554 18.47 34.8481C18.9383 35.1408 19.5552 34.9985 19.8479 34.5302C19.8479 34.5302 19.8634 34.5066 19.914 34.4654C19.9662 34.4227 20.0449 34.3701 20.1576 34.3121C20.3861 34.1946 20.7047 34.0804 21.1083 33.9821C21.6562 33.8487 22.3075 33.7574 23 33.7126V36H19C17.8923 36 17.0611 36.5273 16.487 37.2397C15.9384 37.9204 15.6113 38.7783 15.4074 39.5601C14.9999 41.122 15 42.7235 15 42.9957L15 43C15 43.5523 15.4477 44 16 44C16.5523 44 17 43.5523 17 43C17 42.759 17.0023 41.3695 17.3426 40.0649C17.5137 39.4092 17.7491 38.8609 18.0442 38.4947C18.3139 38.1602 18.6077 38 19 38H29C29.3923 38 29.6861 38.1602 29.9558 38.4947C30.2509 38.8609 30.4863 39.4092 30.6574 40.0649C30.9977 41.3695 31 42.759 31 43C31 43.5523 31.4477 44 32 44C32.5523 44 33 43.5523 33 43V42.9957C33 42.7235 33.0001 41.122 32.5926 39.5601C32.3887 38.7783 32.0616 37.9204 31.513 37.2397C30.9389 36.5273 30.1077 36 29 36H25V33.7126C25.6925 33.7574 26.3438 33.8487 26.8917 33.9821C27.2953 34.0804 27.6139 34.1946 27.8424 34.3121C27.9551 34.3701 28.0338 34.4227 28.086 34.4654C28.1366 34.5066 28.152 34.5301 28.152 34.5301C28.4447 34.9984 29.0617 35.1408 29.53 34.8481C29.9983 34.5554 30.1407 33.9384 29.848 33.4701C29.5766 33.0359 29.158 32.7397 28.7571 32.5336C28.3442 32.3212 27.8643 32.1605 27.3648 32.0389C26.6495 31.8647 25.8342 31.7564 25 31.7089V29.7126C25.6925 29.7574 26.3438 29.8487 26.8917 29.9821C27.2953 30.0804 27.6139 30.1946 27.8424 30.3121C27.9551 30.3701 28.0338 30.4227 28.086 30.4654C28.1366 30.5066 28.152 30.5301 28.152 30.5301C28.4447 30.9984 29.0617 31.1408 29.53 30.8481C29.9983 30.5554 30.1407 29.9384 29.848 29.4701C29.5766 29.0359 29.158 28.7397 28.7571 28.5336C28.3442 28.3212 27.8643 28.1605 27.3648 28.0389C26.6495 27.8647 25.8342 27.7564 25 27.7089V26.5H31.5C33.1079 26.5 33.9824 27.6035 34.4925 29.0771C34.7422 29.7985 34.8711 30.5341 34.9363 31.099C34.9686 31.3789 34.9846 31.6108 34.9924 31.7701C34.9964 31.8496 34.9983 31.9106 34.9992 31.9501C34.9996 31.9698 34.9998 31.9841 34.9999 31.9925L35 32V32.0013C35.0007 32.553 35.4482 33 36 33C36.5523 33 37 32.5523 37 32H36C37 32 37 31.9983 37 31.9983L37 31.9961L37 31.9898L36.9998 31.9702L36.999 31.919L36.9986 31.9039C36.9973 31.8482 36.9948 31.7695 36.99 31.6713C36.9803 31.4751 36.9611 31.1992 36.9231 30.8698C36.8477 30.2159 36.6953 29.3265 36.3825 28.4229C35.7676 26.6465 34.3921 24.5 31.5 24.5H25V22.9974C27.002 22.9815 28.9231 22.8707 28.9231 22.0956C28.9231 21.1912 29.5 19.8347 29.5385 19.8347C29.5769 19.8347 31.3846 19.3825 31.3846 17.3476C31.3846 16.5425 31.6375 16.1622 31.9431 15.7024C32.41 15.0001 33 14.1125 33 11.243C33 1.58566 15 1.58566 15 11.243C15 14.1125 15.59 15.0001 16.0569 15.7024C16.3625 16.1622 16.6154 16.5425 16.6154 17.3476ZM18.6944 17.8459C18.6914 17.8399 18.6882 17.8329 18.6849 17.8248C18.6623 17.7707 18.6154 17.6272 18.6154 17.3476C18.6154 15.8638 17.9578 14.9175 17.6472 14.4705C17.5959 14.3966 17.554 14.3364 17.5262 14.2896C17.3526 13.9981 17 13.3589 17 11.243C17 9.54155 17.7561 8.31012 18.9761 7.4374C20.2554 6.52225 22.0739 6 24 6C25.9261 6 27.7446 6.52225 29.0239 7.4374C30.2439 8.31011 31 9.54155 31 11.243C31 13.3589 30.6474 13.9981 30.4738 14.2896C30.446 14.3364 30.4041 14.3966 30.3528 14.4704C30.0422 14.9174 29.3846 15.8638 29.3846 17.3476C29.3846 17.548 29.3431 17.641 29.3254 17.6752C29.3039 17.7168 29.2721 17.7559 29.2224 17.7958C29.1685 17.8392 29.1078 17.8716 29.0621 17.891L29.0558 17.8937C28.6558 17.9932 28.3971 18.1892 28.3236 18.2452C28.1647 18.3664 28.0596 18.4847 28.0136 18.5384C27.9154 18.6532 27.8512 18.755 27.8285 18.7913C27.7731 18.8801 27.7324 18.9598 27.7126 18.9993C27.6662 19.092 27.6217 19.1923 27.5828 19.2847C27.5021 19.4764 27.4077 19.7243 27.3169 19.9999C27.2377 20.2402 27.1431 20.5546 27.0664 20.9038C26.2706 20.9969 25.1836 21 24 21C22.8542 21 21.7989 20.9971 21.0107 20.9125C20.9837 20.6761 20.947 20.438 20.8986 20.21C20.8347 19.9096 20.7214 19.4825 20.4964 19.0817C20.3246 18.7757 19.7743 17.9517 18.6944 17.8459Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}