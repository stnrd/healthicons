import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ExerciseWalking extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ExerciseWalking({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM25.6928 28.3968L30.8857 33.5207C31.0848 33.7172 31.2405 33.9533 31.3427 34.2137L34.1119 41.2693C34.5155 42.2975 34.0091 43.4582 32.9809 43.8617C31.9527 44.2653 30.792 43.7589 30.3884 42.7307L27.7742 36.07L18.8455 27.2598C18.4086 26.8288 18.1939 26.2211 18.2629 25.6113L18.978 19.2919C17.2542 21.0046 15.9244 23.4143 14.9053 26.607C14.5694 27.6592 13.4441 28.24 12.3918 27.9041C11.3396 27.5682 10.7588 26.4429 11.0947 25.3907C12.965 19.5312 16.07 15.1454 21.2797 13.1341L21.3033 13.1251C22.6301 12.6321 24.0104 12.6718 25.2398 13.3074C26.4214 13.9182 27.2624 14.9731 27.813 16.1554C28.0449 16.6532 28.2593 17.1184 28.4607 17.5551L28.4607 17.5552L28.461 17.5558C28.9487 18.6135 29.3593 19.5042 29.7535 20.2873C30.3073 21.3877 30.7522 22.1161 31.1921 22.6285C31.5998 23.1034 32.0055 23.3952 32.5224 23.597C33.0782 23.8141 33.8571 23.9636 35.06 23.9997C36.164 24.0328 37.0322 24.9547 36.9991 26.0588C36.966 27.1628 36.0441 28.031 34.94 27.9979C33.4951 27.9546 32.212 27.77 31.0673 27.323C29.8837 26.8608 28.9506 26.1584 28.157 25.2339C27.6564 24.6508 27.2176 23.9859 26.8062 23.2621L25.6928 28.3968ZM18.2627 30.2198L21.5777 33.3994L20.0523 38.547C19.9343 38.9453 19.6951 39.297 19.3681 39.5531L14.2334 43.5755C13.3639 44.2566 12.1068 44.1039 11.4257 43.2344C10.7445 42.3649 10.8972 41.1078 11.7667 40.4266L16.3986 36.7981L17.7944 32.0881L18.2627 30.2198ZM31.2502 8C31.2502 10.2091 29.4593 12 27.2502 12C25.041 12 23.2502 10.2091 23.2502 8C23.2502 5.79086 25.041 4 27.2502 4C29.4593 4 31.2502 5.79086 31.2502 8Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}