import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FactoryWorker extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const FactoryWorker({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0582 7.51919C18.3605 8.50375 16.2445 10.8046 15.3993 13.6943C13.8977 14.4637 13 15.439 13 16.5C13 17.698 14.1443 18.7866 16.0102 19.593C16.0034 19.7278 16 19.8635 16 20C16 24.4183 19.5817 28 24 28C28.4183 28 32 24.4183 32 20C32 19.8635 31.9966 19.7278 31.9898 19.593C33.8557 18.7866 35 17.698 35 16.5C35 15.439 34.1023 14.4637 32.6007 13.6943C31.7555 10.8046 29.6395 8.50375 26.9418 7.51919C26.7266 6.64685 25.9388 6 25 6H23C22.0612 6 21.2734 6.64685 21.0582 7.51919ZM22 12C22.5523 12 23 11.5523 23 11V8H25V11C25 11.5523 25.4477 12 26 12C26.5523 12 27 11.5523 27 11V9.72223C28.5867 10.5315 29.8684 11.9745 30.5247 13.7783C30.5221 13.7896 30.5197 13.8011 30.5175 13.8126C30.4859 13.8381 30.4358 13.8741 30.3595 13.9197C30.0743 14.0898 29.602 14.2763 28.9481 14.4464C27.6549 14.7827 25.8668 15 24 15C22.1332 15 20.3451 14.7827 19.0519 14.4464C18.398 14.2763 17.9257 14.0898 17.6405 13.9197C17.5642 13.8741 17.5141 13.8381 17.4825 13.8126C17.4819 13.8097 17.4814 13.8068 17.4808 13.804C17.4791 13.7954 17.4773 13.7868 17.4753 13.7783C18.1316 11.9745 19.4133 10.5315 21 9.72224V11C21 11.5523 21.4477 12 22 12ZM16.3438 15.4576L16.3112 15.4743C15.704 15.7854 15.3372 16.0806 15.1439 16.3022C15.0585 16.4001 15.0216 16.4654 15.0064 16.4996C15.0271 16.5476 15.0879 16.6525 15.2549 16.814C15.5681 17.117 16.1261 17.4819 16.9791 17.8309C18.6753 18.5248 21.1565 19 24 19C26.8435 19 29.3247 18.5248 31.0209 17.8309C31.8739 17.4819 32.4319 17.117 32.7451 16.814C32.9121 16.6525 32.9729 16.5476 32.9936 16.4996C32.9784 16.4654 32.9415 16.4001 32.8561 16.3022C32.6628 16.0806 32.296 15.7854 31.6888 15.4743L31.6562 15.4576C31.5615 15.5271 31.4687 15.5868 31.3841 15.6373C30.867 15.9457 30.1892 16.1902 29.4514 16.382C27.9611 16.7696 25.9992 17 24 17C22.0008 17 20.0389 16.7696 18.5486 16.382C17.8108 16.1902 17.133 15.9457 16.6159 15.6373C16.5313 15.5868 16.4385 15.5271 16.3438 15.4576ZM33.0032 16.5284C33.0029 16.5284 33.0019 16.5253 33.0011 16.519C33.0031 16.5254 33.0035 16.5285 33.0032 16.5284ZM33.0033 16.4695C33.003 16.4695 33.0019 16.4729 33.0011 16.4797C33.0021 16.4764 33.0028 16.4739 33.0031 16.4722L33.0033 16.4695ZM14.9984 16.4762C14.9977 16.4717 14.997 16.4695 14.9967 16.4695C14.9964 16.4695 14.9968 16.4729 14.9989 16.4797C14.9987 16.4784 14.9986 16.4773 14.9984 16.4762ZM14.9981 16.5242L14.9989 16.519C14.9985 16.5202 14.9982 16.5213 14.9979 16.5223C14.9968 16.5264 14.9966 16.5285 14.9968 16.5284C14.997 16.5284 14.9975 16.527 14.9981 16.5242ZM29.9939 20.2739C28.2696 20.7332 26.211 21 24 21C21.789 21 19.7304 20.7332 18.0061 20.2739C18.1493 23.4605 20.7781 26 24 26C27.2219 26 29.8507 23.4605 29.9939 20.2739Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.6853 26.5942C34.8001 26.2347 34.7027 25.8411 34.4334 25.5767C34.1642 25.3122 33.7689 25.2219 33.4115 25.3431C30.8475 26.2126 29 28.6392 29 31.5C29 33.8025 30.1974 35.824 32 36.978V41C32 41.5523 32.4477 42 33 42H38C38.5523 42 39 41.5523 39 41V36.978C40.8026 35.824 42 33.8025 42 31.5C42 28.6392 40.1525 26.2126 37.5885 25.3431C37.2311 25.2219 36.8358 25.3122 36.5666 25.5767C36.2973 25.8411 36.1999 26.2347 36.3147 26.5942C36.3232 26.6208 36.3305 26.6481 36.3365 26.6762L36.8936 29.2761C37.0837 30.1633 36.4074 31 35.5 31C34.5926 31 33.9163 30.1633 34.1064 29.2761L34.6635 26.6762C34.6695 26.6481 34.6768 26.6208 34.6853 26.5942ZM38.8492 28.857L38.7481 28.3854C39.5238 29.1942 40 30.292 40 31.5C40 33.2479 39.0036 34.7649 37.5433 35.5107C37.1962 35.6879 36.9837 36.0507 36.9988 36.4401C36.9996 36.4599 37 36.4799 37 36.5V40H34V36.5C34 36.4975 34 36.495 34 36.4925C34.0001 36.4749 34.0005 36.4575 34.0012 36.4401C34.0163 36.0507 33.8038 35.6879 33.4567 35.5107C31.9964 34.7649 31 33.2479 31 31.5C31 30.292 31.4762 29.1942 32.2519 28.3854L32.1508 28.8571C31.6939 30.9893 33.3193 33 35.5 33C37.6807 33 39.3061 30.9893 38.8492 28.857Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3533 28.6081L23 32.2223V35.8969C23.2046 35.9494 23.5251 36 24 36C24.4749 36 24.7954 35.9494 25 35.8969V32L27 30.5V42L6 42V36C6 32.3389 12.52 29.7274 18.3533 28.6081ZM14.4748 36.268L21 35.1805V40L13 40V32.1806C14.048 31.773 15.1853 31.4135 16.3506 31.1096L14.4748 36.268ZM8 40L11 40V33.0789L10.9258 33.118C9.86246 33.6816 9.08395 34.2565 8.59368 34.7989C8.1146 35.329 8 35.7218 8 36V40ZM24 38C23.6217 38 23.2903 37.9752 23 37.9328V40H25V37.9328C24.7097 37.9752 24.3783 38 24 38ZM20.9497 33.1613L18.4419 31.2108L17.5251 33.732L20.9497 33.1613Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}