import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Inpatient extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Inpatient({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1167 17.1878L16.4809 16.8239C17.1727 16.1327 17.1731 15.0118 16.4818 14.3202L14.6816 12.5191C13.9902 11.8273 12.8687 11.8269 12.1768 12.5182L11.8263 12.8684L16.1167 17.1878Z" fill="#333333"/>
<path d="M38 26.9997V30H9V21.3563L14.2752 26.6672C14.4867 26.8801 14.7733 26.9997 15.0722 26.9997H38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM18.11 19.0664H39.0662C41.2388 19.0664 43 20.8423 43 23.033C43 24.8993 41.7218 26.4646 40 26.8873V30H44V32H41.9495C42.5978 32.6353 43 33.5207 43 34.5C43 36.433 41.433 38 39.5 38C37.567 38 36 36.433 36 34.5C36 33.5207 36.4022 32.6353 37.0505 32H10.9495C11.5978 32.6353 12 33.5207 12 34.5C12 36.433 10.433 38 8.5 38C6.567 38 5 36.433 5 34.5C5 33.5207 5.40223 32.6353 6.05051 32H4V30H7V19.3428L6.16703 18.5042C4.61099 16.9376 4.61099 14.3951 6.16703 12.8285C7.22155 11.7669 8.71987 11.4263 10.0591 11.8069L10.7632 11.1034C12.2364 9.63149 14.624 9.63232 16.0961 11.1052L17.8963 12.9063C19.3686 14.3793 19.3678 16.7667 17.8945 18.2387L17.5261 18.6068L17.8925 18.9756C17.9502 19.0337 18.0285 19.0664 18.11 19.0664Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}