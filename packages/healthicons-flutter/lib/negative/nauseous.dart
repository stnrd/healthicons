import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Nauseous extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Nauseous({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM21.5 32C21.261 32 21.0415 32.0839 20.8695 32.2238C20.6664 31.5657 20.2492 30.9601 19.7806 30.3749C19.4353 29.9438 18.806 29.8742 18.3749 30.2194C17.9438 30.5647 17.8742 31.194 18.2194 31.6251C18.8459 32.4073 18.9936 32.7954 18.9998 33.0459C19.005 33.2571 18.9106 33.6115 18.26 34.3274C17.8885 34.7361 17.9187 35.3686 18.3274 35.74C18.7361 36.1115 19.3686 36.0813 19.74 35.6726C20.2772 35.0815 20.7095 34.4724 20.8979 33.7985C21.0654 33.925 21.2739 34 21.5 34H26.5C26.7261 34 26.9346 33.925 27.1021 33.7985C27.2905 34.4724 27.7228 35.0815 28.26 35.6726C28.6314 36.0813 29.2639 36.1115 29.6726 35.74C30.0813 35.3686 30.1115 34.7361 29.74 34.3274C29.0894 33.6115 28.995 33.2571 29.0002 33.0459C29.0064 32.7954 29.1541 32.4073 29.7806 31.6251C30.1258 31.194 30.0562 30.5647 29.6251 30.2194C29.194 29.8742 28.5647 29.9438 28.2194 30.3749C27.7508 30.9601 27.3336 31.5657 27.1305 32.2238C26.9585 32.0839 26.739 32 26.5 32H21.5ZM14.8073 25.2329C14.1242 24.7954 13.6237 24.0879 13.7428 23.3502C13.7667 23.2025 13.8554 23.0732 13.9847 22.9979C14.114 22.9225 14.2702 22.9091 14.4105 22.9611C16.2287 23.6362 18.2567 23.2175 20.0526 21.5127C20.1764 21.3951 20.3517 21.3489 20.5173 21.3901C20.683 21.4312 20.8163 21.5541 20.8707 21.7159C21.1024 22.4047 20.8948 23.3342 20.3905 24.0976C19.8685 24.8878 18.983 25.5791 17.737 25.763C16.5386 25.9399 15.521 25.69 14.8073 25.2329ZM32.7542 25.2329C33.4373 24.7954 33.9377 24.0879 33.8186 23.3502C33.7948 23.2025 33.7061 23.0732 33.5768 22.9979C33.4475 22.9225 33.2913 22.9091 33.151 22.9611C31.3327 23.6362 29.3048 23.2175 27.5089 21.5127C27.3851 21.3951 27.2098 21.3489 27.0441 21.3901C26.8784 21.4312 26.7452 21.5541 26.6907 21.7159C26.459 22.4047 26.6666 23.3342 27.171 24.0976C27.693 24.8878 28.5785 25.5791 29.8244 25.763C31.0229 25.9399 32.0404 25.69 32.7542 25.2329Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}