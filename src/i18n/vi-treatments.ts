/**
 * Vietnamese translations for the deep treatment content in src/data/treatments.ts.
 *
 * Keyed by slug. Only translatable fields are included — numeric fields
 * (prices, durations, counts) live in the English source and are reused as-is.
 * AI-generated; recommend a native Vietnamese speaker with medical background
 * reviews this before it's relied on for clinical decisions.
 */

export interface FaqItemVi {
	question: string;
	answer: string;
}

export interface CostRowVi {
	country: string;
	waitTime: string;
	successRate: string;
}

export interface TreatmentDataVi {
	name: string;
	shortDescription: string;
	overview: string;
	procedures: string[];
	detailedProcedures?: { name: string; description: string }[];
	benefits: string[];
	flagshipProcedure: string;
	costComparison: CostRowVi[];
	inclusions: string[];
	exclusions: string[];
	faqs: FaqItemVi[];
}

export const viTreatments: Record<string, TreatmentDataVi> = {
	'cardiac-care': {
		name: 'Tim mạch',
		shortDescription: 'Bắc cầu, sửa van tim và nong mạch được thực hiện bởi các bác sĩ phẫu thuật đào tạo tại các trung tâm tim mạch hàng đầu.',
		overview:
			'Các chương trình tim mạch tại Ấn Độ quy tụ các bác sĩ phẫu thuật được đào tạo quốc tế cùng với một trong những khối lượng phẫu thuật lớn nhất thế giới, mang đến cho bệnh nhân cơ hội tiếp cận các thủ thuật tiên tiến như bắc cầu không dùng máy tim phổi và sửa van xâm lấn tối thiểu — với chi phí chỉ bằng một phần nhỏ so với phương Tây, không cần chờ đợi.',
		procedures: ['Phẫu thuật bắc cầu tim', 'Thay van tim', 'Nong mạch vành'],
		detailedProcedures: [
			{
				name: 'Nong mạch vành',
				description:
					'Nong mạch vành là một thủ thuật xâm lấn tối thiểu được sử dụng để mở rộng động mạch vành bị hẹp hoặc tắc nghẽn, giúp phục hồi lưu lượng máu đến cơ tim ở bệnh nhân mắc bệnh động mạch vành. Dưới gây tê tại chỗ, bác sĩ tim mạch luồn một ống thông mỏng qua động mạch ở cổ tay hoặc bẹn đến vị trí tắc nghẽn, dưới hướng dẫn hình ảnh X-quang trực tiếp, và bơm phồng một quả bóng nhỏ để ép mảng xơ vữa vào thành động mạch; trong hầu hết các trường hợp, một stent lưới kim loại sau đó được đặt lại để giữ cho mạch máu mở và giảm nguy cơ tái hẹp. Thủ thuật thường được khuyến nghị cho bệnh nhân đau thắt ngực, giảm lưu lượng máu khi làm nghiệm pháp gắng sức, hoặc như một điều trị cấp cứu trong cơn nhồi máu cơ tim để nhanh chóng khai thông mạch máu bị tắc. Thủ thuật được thực hiện trong phòng thông tim và thường mất dưới một giờ, hầu hết bệnh nhân được theo dõi qua đêm và xuất viện trong vòng một đến hai ngày. Các trung tâm tim mạch tại Ấn Độ thực hiện khối lượng lớn ca nong mạch bằng hình ảnh hiện đại và nhiều lựa chọn stent, bệnh nhân thường trở lại hoạt động nhẹ trong vòng một tuần, có bác sĩ tim mạch tư vấn về thuốc và theo dõi trước khi về nước.',
			},
			{
				name: 'Phẫu thuật bắc cầu động mạch vành (CABG)',
				description:
					'Phẫu thuật bắc cầu động mạch vành, thường gọi là CABG hay mổ bắc cầu, được thực hiện khi một hoặc nhiều động mạch vành bị hẹp hoặc tắc nghiêm trọng và nong mạch không phù hợp, thường gặp ở bệnh nhân mắc bệnh đa mạch vành hoặc bệnh động mạch vành phức tạp. Trong ca mổ, bác sĩ phẫu thuật tim lấy một mạch máu khỏe mạnh từ nơi khác trong cơ thể, thường là động mạch vú trong ở ngực hoặc tĩnh mạch ở chân, và ghép nó để tạo đường vòng cho máu lưu thông qua đoạn bị tắc. CABG truyền thống được thực hiện qua một đường rạch ở xương ức với bệnh nhân được hỗ trợ bằng máy tim phổi nhân tạo, mặc dù các phương pháp không dùng máy tim phổi và ít xâm lấn hơn cũng được áp dụng trong một số trường hợp chọn lọc. Mục tiêu là giảm đau thắt ngực, giảm nguy cơ nhồi máu cơ tim và cải thiện chức năng tim lâu dài. Hồi phục bao gồm vài ngày nằm viện, kể cả thời gian trong phòng chăm sóc đặc biệt ngay sau mổ, tiếp theo là giai đoạn hạn chế vận động có kiểm soát và phục hồi chức năng tim. Các chương trình phẫu thuật tim tại Ấn Độ kết hợp đội ngũ phẫu thuật giàu kinh nghiệm với các đơn vị chăm sóc đặc biệt trang bị tốt, bệnh nhân quốc tế thường lên kế hoạch nằm viện khoảng một tuần, sau đó vài tuần hồi phục tại chỗ trước khi bay về nước, với việc kiểm tra vết mổ và hướng dẫn phục hồi chức năng trong suốt quá trình.',
			},
			{
				name: 'Phẫu thuật thay van hai lá',
				description:
					'Thay van hai lá được thực hiện khi van hai lá, van kiểm soát dòng máu giữa tâm nhĩ trái và tâm thất trái của tim, trở nên quá hẹp (hẹp van) hoặc hở (hở van) để hoạt động bình thường và không thể sửa chữa đầy đủ. Dưới gây mê toàn thân và với bệnh nhân được hỗ trợ bằng máy tim phổi nhân tạo, bác sĩ phẫu thuật mở tim, loại bỏ van bị hỏng và khâu vào van thay thế — hoặc van cơ học, bền nhưng cần dùng thuốc chống đông máu suốt đời, hoặc van sinh học từ mô, tránh được việc dùng thuốc chống đông lâu dài nhưng có thể hỏng sớm hơn. Lựa chọn giữa các loại van phụ thuộc vào tuổi tác, lối sống và sức khỏe tổng thể của bệnh nhân, được thảo luận với đội ngũ phẫu thuật trước đó. Thủ thuật có thể được thực hiện qua phương pháp mở xương ức truyền thống hoặc, ở một số bệnh nhân chọn lọc, qua các đường rạch nhỏ ít xâm lấn hơn. Bệnh nhân thường nằm một đến hai ngày trong phòng chăm sóc đặc biệt, sau đó vài ngày nữa tại khoa trước khi xuất viện. Các trung tâm tim mạch tại Ấn Độ cung cấp cả van cơ học và van sinh học cùng với chăm sóc hậu phẫu tim mạch giàu kinh nghiệm, bệnh nhân quốc tế thường lên kế hoạch nằm viện khoảng một tuần, với siêu âm tim theo dõi được sắp xếp trước khi về nước để xác nhận van hoạt động tốt.',
			},
			{
				name: 'Thay van động mạch chủ',
				description:
					"Thay van động mạch chủ điều trị van động mạch chủ bị bệnh — van kiểm soát dòng máu từ tim vào động mạch chính của cơ thể — bị hẹp (hẹp van) hoặc hở (hở van), gây ra các triệu chứng như khó thở, đau ngực hoặc ngất xỉu. Trong phẫu thuật tim hở thông thường, lồng ngực được mở ra, tim tạm thời ngừng đập và được hỗ trợ bằng máy tim phổi nhân tạo, bác sĩ phẫu thuật loại bỏ van bị bệnh và khâu vào van thay thế cơ học hoặc sinh học có kích thước phù hợp với giải phẫu của bệnh nhân. Van cơ học bền hơn nhưng cần thuốc chống đông suốt đời, trong khi van mô tránh được điều này nhưng có thể cần thay sau mười đến hai mươi năm, đội ngũ phẫu thuật giúp bệnh nhân cân nhắc những đánh đổi này dựa trên tuổi tác và sức khỏe. Ca mổ thường kéo dài vài giờ, bệnh nhân nằm trong phòng chăm sóc đặc biệt sau đó trước khi chuyển sang khoa thường. Đây là một trong những phẫu thuật tim được thực hiện phổ biến nhất tại Ấn Độ, với các trung tâm cung cấp đầy đủ các loại van và theo dõi chu phẫu giàu kinh nghiệm. Bệnh nhân quốc tế thường lưu lại Ấn Độ khoảng hai đến ba tuần để hoàn tất phẫu thuật, hồi phục ban đầu và đánh giá theo dõi trước khi bay về nước.",
			},
			{
				name: 'Thay van động mạch chủ qua ống thông (TAVR)',
				description:
					'Thay van động mạch chủ qua ống thông, hay TAVR, là một lựa chọn thay thế ít xâm lấn cho phẫu thuật tim hở để điều trị hẹp van động mạch chủ nặng, đặc biệt ở bệnh nhân cao tuổi hoặc được coi là nguy cơ cao đối với phẫu thuật thông thường. Thay vì mở lồng ngực, bác sĩ tim mạch can thiệp luồn một ống thông mang theo van thay thế có thể gấp lại qua mạch máu, thường ở bẹn, lên đến tim, nơi nó được mở rộng và định vị bên trong van bị bệnh hiện có của bệnh nhân, đẩy van cũ sang một bên và ngay lập tức đảm nhận chức năng của nó. Thủ thuật thường được thực hiện dưới an thần hoặc gây mê nhẹ và được hướng dẫn bằng hình ảnh trực tiếp, không cần ngừng tim hay dùng máy tim phổi nhân tạo. Vì tránh được đường rạch lớn ở ngực, hồi phục nói chung nhanh hơn so với thay van bằng phẫu thuật, nhiều bệnh nhân có thể vận động trong vòng một ngày và xuất viện trong vài ngày. TAVR ngày càng được cung cấp tại các trung tâm tim mạch tiên tiến của Ấn Độ cho bệnh nhân đáp ứng các tiêu chí giải phẫu phù hợp, sau khi đánh giá hình ảnh cẩn thận để xác nhận sự phù hợp. Bệnh nhân quốc tế thường lên kế hoạch một đến hai tuần tại Ấn Độ để đánh giá trước thủ thuật, thực hiện thủ thuật và một giai đoạn hồi phục ngắn trước khi theo dõi và về nước.',
			},
			{
				name: 'Thông tim',
				description:
					'Thông tim là một thủ thuật chẩn đoán và đôi khi là điều trị, trong đó một ống thông mỏng, mềm dẻo được luồn qua mạch máu, thường ở cổ tay hoặc bẹn, vào các buồng và động mạch của tim để đánh giá trực tiếp cách tim hoạt động. Sử dụng hướng dẫn X-quang và thuốc cản quang, bác sĩ tim mạch có thể quan sát các động mạch vành để tìm tắc nghẽn, đo áp lực trong các buồng tim, đánh giá chức năng van và trong một số trường hợp lấy mẫu mô. Thủ thuật thường được dùng để khảo sát đau ngực, kết quả nghiệm pháp gắng sức bất thường, suy tim chưa rõ nguyên nhân, hoặc nghi ngờ bệnh van tim hay tim bẩm sinh, và thường là bước đầu tiên trước khi quyết định có cần nong mạch, đặt stent hay phẫu thuật hay không. Thủ thuật được thực hiện dưới gây tê tại chỗ kèm an thần nhẹ, thường mất ba mươi phút đến một giờ, hầu hết bệnh nhân có thể về nhà trong ngày hoặc sau một đêm theo dõi. Các phòng thông tim của Ấn Độ được trang bị hệ thống hình ảnh hiện đại cho phép chẩn đoán chính xác và, khi thích hợp, điều trị ngay trong cùng một lần can thiệp. Bệnh nhân quốc tế thường chỉ cần một chuyến thăm ngắn cho bản thân thủ thuật, kết quả và các bước tiếp theo được thảo luận trực tiếp với đội ngũ tim mạch.',
			},
			{
				name: 'Nong van động mạch phổi bằng bóng',
				description:
					'Nong van động mạch phổi bằng bóng là một thủ thuật dựa trên ống thông được sử dụng để điều trị hẹp van động mạch phổi, tình trạng van kiểm soát dòng máu từ tâm thất phải của tim đến phổi bị hẹp bất thường, buộc tim phải làm việc vất vả hơn và giảm lưu lượng máu đến phổi. Tình trạng này thường được chẩn đoán ở trẻ sơ sinh, trẻ em hoặc người trẻ tuổi, đôi khi là một phần của bệnh tim bẩm sinh từ khi sinh ra. Trong thủ thuật, bác sĩ tim mạch luồn một ống thông có quả bóng xẹp ở đầu qua tĩnh mạch, thường ở bẹn, vào van bị hẹp, sau đó bơm phồng bóng để nong rộng và giải phóng tắc nghẽn. Thủ thuật được thực hiện dưới an thần hoặc gây mê toàn thân trong phòng thông tim, dưới hướng dẫn hình ảnh X-quang và siêu âm tim, thường mất một đến hai giờ. Vì tránh được phẫu thuật tim hở, hồi phục thường nhanh, hầu hết bệnh nhân được theo dõi qua đêm và xuất viện trong một đến hai ngày. Các trung tâm tim mạch nhi và tim mạch cấu trúc tại Ấn Độ thường xuyên thực hiện nong van bằng bóng cho cả trẻ em và người lớn, với hình ảnh đánh giá trước thủ thuật cẩn thận để xác nhận sự phù hợp. Các gia đình đi điều trị thủ thuật này thường lên kế hoạch lưu trú ngắn khoảng một tuần, bao gồm đánh giá trước thủ thuật và siêu âm tim theo dõi.',
			},
			{
				name: 'Đặt máy tạo nhịp tim',
				description:
					'Máy tạo nhịp tim là một thiết bị điện tử nhỏ được cấy ghép để giúp điều hòa nhịp tim bất thường chậm hoặc không đều, thường được sử dụng để điều trị các tình trạng như nhịp tim chậm, block tim hoặc một số rối loạn nhịp tim mà hệ thống điện tự nhiên của tim hoạt động không ổn định. Thiết bị bao gồm một máy phát xung, được cấy ngay dưới da gần xương đòn, kết nối với một hoặc nhiều dây dẫn mỏng được luồn qua tĩnh mạch vào các buồng tim, nơi chúng cảm nhận nhịp tim và phát ra các xung điện nhỏ khi cần để duy trì nhịp đập đều đặn. Việc cấy ghép thường được thực hiện dưới gây tê tại chỗ kèm an thần, mất khoảng một đến hai giờ, và được thực hiện qua một đường rạch nhỏ thay vì phẫu thuật mở. Hầu hết bệnh nhân nằm viện qua đêm để theo dõi và kiểm tra cài đặt thiết bị trước khi xuất viện. Các trung tâm điện sinh lý học và tim mạch tại Ấn Độ cung cấp nhiều loại máy tạo nhịp một buồng, hai buồng và các thiết bị tiên tiến hơn phù hợp với các rối loạn nhịp khác nhau. Bệnh nhân quốc tế thường lên kế hoạch khoảng một tuần tại Ấn Độ để đánh giá trước thủ thuật, cấy ghép và kiểm tra thiết bị ban đầu, cùng với hướng dẫn về theo dõi từ xa và tái khám với bác sĩ tại quê nhà sau đó.',
			},
			{
				name: 'Phẫu thuật tim nhi',
				description:
					'Phẫu thuật tim nhi bao gồm nhiều ca mổ được thực hiện trên trẻ sơ sinh và trẻ em để điều chỉnh các dị tật tim bẩm sinh — các vấn đề cấu trúc của tim có từ khi sinh ra, chẳng hạn như lỗ thông giữa các buồng tim, van tim bị dị dạng, hoặc các kết nối bất thường của các mạch máu lớn. Thủ thuật cụ thể phụ thuộc vào dị tật: một số tình trạng có thể được vá bằng một miếng vá trong phẫu thuật tim hở sử dụng máy tim phổi nhân tạo có kích thước phù hợp với bệnh nhân nhỏ, trong khi những tình trạng khác liên quan đến việc tái tạo hoặc định tuyến lại các mạch máu để thiết lập tuần hoàn bình thường. Chẩn đoán thường dựa vào siêu âm tim, và đôi khi là hình ảnh CT hoặc MRI, để lập bản đồ giải phẫu chính xác trước khi lên kế hoạch phẫu thuật. Vì tim và mạch máu của trẻ em nhỏ và vẫn đang phát triển, các thủ thuật này đòi hỏi bác sĩ phẫu thuật tim nhi và bác sĩ gây mê giàu kinh nghiệm về các bệnh tim bẩm sinh, cùng với hỗ trợ chăm sóc đặc biệt nhi khoa chuyên biệt sau đó. Thời gian hồi phục rất khác nhau tùy theo mức độ phức tạp của dị tật và tuổi của trẻ, từ khoảng một tuần đến vài tuần nằm viện. Các chương trình tim mạch nhi của Ấn Độ điều trị nhiều loại dị tật bẩm sinh, thường cho trẻ em từ các nước khác, với chỗ ở cho gia đình và chăm sóc trước và sau phẫu thuật được phối hợp theo nhu cầu của bệnh nhân nhỏ tuổi và cha mẹ các em.',
			},
			{
				name: 'Cấy ghép tim nhân tạo / LVAD',
				description:
					'Thiết bị hỗ trợ tâm thất trái, hay LVAD, là một bơm cơ học được cấy ghép để giúp một trái tim bị suy yếu nghiêm trọng lưu thông máu, được sử dụng ở bệnh nhân suy tim giai đoạn nặng không đáp ứng đầy đủ với thuốc. Thiết bị được kết nối phẫu thuật với tâm thất trái và động mạch chủ, hút máu từ buồng tim bị suy yếu và bơm vào động mạch chính của cơ thể thay cho cơ tim bị suy; một dây cáp đi ra qua da đến bộ điều khiển và pin bên ngoài được bệnh nhân đeo. LVAD có thể đóng vai trò là cầu nối chờ ghép tim trong khi bệnh nhân chờ tạng hiến, hoặc là liệu pháp dài hạn hơn cho những người không phải là ứng viên ghép tạng. Việc cấy ghép đòi hỏi phẫu thuật tim hở với tuần hoàn ngoài cơ thể, sau đó là thời gian nằm viện kéo dài bao gồm theo dõi chăm sóc đặc biệt và đào tạo cho bệnh nhân và người chăm sóc về cách vận hành thiết bị. Thuật ngữ tim nhân tạo đôi khi được dùng một cách không chính xác cho LVAD, mặc dù tim nhân tạo toàn phần thay thế hoàn toàn trái tim là một công nghệ riêng biệt, hiếm gặp hơn. Các trung tâm suy tim nặng tiên tiến của Ấn Độ cung cấp cấy ghép LVAD và chăm sóc theo dõi chuyên biệt mà nó đòi hỏi, bệnh nhân nên dự kiến thời gian lưu trú kéo dài vài tuần cho phẫu thuật, hồi phục và đào tạo sử dụng thiết bị trước khi về nước.',
			},
			{
				name: 'Phẫu thuật nội mạch điều trị phình động mạch chủ',
				description:
					'Phẫu thuật nội mạch điều trị phình động mạch chủ, hay EVAR, là một thủ thuật xâm lấn tối thiểu được sử dụng để điều trị phình động mạch chủ — một đoạn phình to, suy yếu của động mạch chính trong cơ thể, có nguy cơ vỡ nếu không được điều trị. Thay vì mở bụng hoặc ngực để thay thế trực tiếp đoạn bị ảnh hưởng, bác sĩ phẫu thuật mạch máu tiếp cận động mạch đùi ở bẹn và luồn một stent ghép bọc vải qua mạch máu đến vị trí phình, nơi nó được mở rộng để lót bên trong động mạch và chuyển hướng dòng máu ra khỏi thành mạch bị suy yếu. Thủ thuật được thực hiện dưới gây tê vùng hoặc gây mê toàn thân, dưới hướng dẫn hình ảnh X-quang liên tục, và thường mất một đến ba giờ tùy vị trí và độ phức tạp của khối phình. Vì tránh được đường rạch phẫu thuật lớn, hồi phục nói chung nhanh hơn so với phẫu thuật mở, nhiều bệnh nhân có thể vận động trong vòng một đến hai ngày và xuất viện trong khoảng một tuần. Hình ảnh CT cẩn thận trước đó xác nhận hình dạng và kích thước khối phình phù hợp với stent ghép. Các trung tâm phẫu thuật mạch máu của Ấn Độ cung cấp EVAR với nhiều loại thiết bị stent ghép, bệnh nhân quốc tế thường lên kế hoạch khoảng hai tuần để đánh giá, thực hiện thủ thuật và theo dõi hình ảnh sau thủ thuật.',
			},
			{
				name: 'Phẫu thuật tim hở',
				description:
					'Phẫu thuật tim hở là thuật ngữ chung cho bất kỳ ca mổ tim nào trong đó lồng ngực được phẫu thuật mở ra, thường qua một đường rạch ở xương ức, để đội ngũ phẫu thuật tiếp cận trực tiếp với tim và các mạch máu lớn của nó. Nhiều ca mổ như vậy được thực hiện với tim tạm thời ngừng đập và máy tim phổi nhân tạo đảm nhận tuần hoàn và hô hấp, cho phép bác sĩ phẫu thuật thao tác trên một trái tim tĩnh lặng, không có máu trước khi khởi động lại. Các lý do phổ biến cho phẫu thuật tim hở bao gồm bắc cầu các động mạch vành bị tắc, sửa chữa hoặc thay thế van tim bị hỏng, điều chỉnh dị tật bẩm sinh và sửa chữa phình mạch liên quan đến tim hoặc mạch máu lớn. Kỹ thuật và thời gian phụ thuộc vào tình trạng bệnh lý nền, nhưng hầu hết các ca mổ mất vài giờ và sau đó là thời gian trong phòng chăm sóc đặc biệt khi bệnh nhân được cai máy thở và theo dõi chảy máu, nhiễm trùng và thay đổi nhịp tim. Thời gian nằm viện dài hơn, từ một đến hai tuần, thường theo sau, cùng với phục hồi chức năng tim có cấu trúc để xây dựng lại sức mạnh và sức bền. Các trung tâm phẫu thuật tim của Ấn Độ thực hiện khối lượng lớn các thủ thuật tim hở trong các nhóm này, được hỗ trợ bởi các đơn vị chăm sóc đặc biệt tim mạch chuyên biệt, bệnh nhân quốc tế thường lên kế hoạch vài tuần tại nước sở tại để hoàn tất phẫu thuật và hồi phục ban đầu.',
			},
			{
				name: 'Điều trị bệnh tim bẩm sinh',
				description:
					'Bệnh tim bẩm sinh đề cập đến các bất thường cấu trúc của tim hoặc các mạch máu lớn có từ khi sinh ra, từ những lỗ nhỏ giữa các buồng tim có thể tự đóng lại đến các dị dạng phức tạp cần phẫu thuật điều chỉnh theo từng giai đoạn. Điều trị được cá nhân hóa cao và bắt đầu bằng hình ảnh chẩn đoán chi tiết, thường là siêu âm tim và đôi khi là CT hoặc MRI tim, để lập bản đồ chính xác dị tật trước khi bác sĩ tim mạch nhi hoặc người lớn về bệnh tim bẩm sinh và đội ngũ phẫu thuật quyết định phương pháp tốt nhất. Một số dị tật, chẳng hạn như thông liên nhĩ hoặc thông liên thất nhỏ, có thể được đóng lại bằng thiết bị qua ống thông mà không cần phẫu thuật mở, trong khi các tình trạng phức tạp hơn cần phẫu thuật tim hở, đôi khi được thực hiện theo từng giai đoạn trong nhiều tháng hoặc nhiều năm khi bệnh nhân lớn lên. Nhiều bệnh nhân được chẩn đoán và điều trị từ thời thơ ấu, nhưng ngày càng có nhiều người lớn mắc bệnh tim bẩm sinh cũng cần chăm sóc liên tục hoặc điều chỉnh khi các dị tật nhẹ từ thời thơ ấu tiến triển theo thời gian. Các chương trình tim bẩm sinh của Ấn Độ quản lý toàn bộ phổ các tình trạng này, từ đóng thiết bị đơn giản đến tái tạo phức tạp theo từng giai đoạn, với các đội ngũ chuyên biệt cho cả bệnh nhân nhi và người lớn. Vì kế hoạch điều trị thay đổi rất nhiều theo từng dị tật, các gia đình quốc tế thường bắt đầu bằng một đánh giá chi tiết từ xa hoặc trực tiếp trước khi xác nhận lộ trình điều trị và thời gian lưu trú.',
			},
		],
		benefits: [
			'Bác sĩ phẫu thuật được đào tạo và chứng nhận tại Mỹ, Anh và châu Âu',
			'Một trong những khối lượng phẫu thuật tim lớn nhất thế giới, đồng nghĩa với kinh nghiệm thực tế sâu rộng',
			'Khoa ICU tim mạch chuyên biệt và đơn vị hồi phục trung gian',
			'Không cần chờ đợi — hầu hết các ca can thiệp được lên lịch trong vòng vài ngày sau ý kiến đầu tiên',
		],
		flagshipProcedure: 'Phẫu thuật bắc cầu động mạch vành (CABG)',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '95–97%' },
			{ country: 'Vương quốc Anh', waitTime: '3–12 tháng (NHS)', successRate: '95–97%' },
			{ country: 'Đức', waitTime: '4–10 tuần', successRate: '94–96%' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '93–95%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '96%+' },
		],
		inclusions: [
			'Đánh giá tim mạch trước phẫu thuật, điện tâm đồ, siêu âm tim và phân tích chụp mạch',
			'Chi phí bác sĩ phẫu thuật cho thủ thuật bắc cầu hoặc van tim',
			'Chi phí phòng mổ và gây mê',
			'Thời gian nằm ICU tim mạch (3 ngày) và phòng hồi phục riêng (6 ngày)',
			'Chăm sóc y tế, theo dõi và vật lý trị liệu trong thời gian nằm viện',
			'Thuốc tim mạch tiêu chuẩn và vật tư trong thời gian lưu trú',
			'Chi phí xét nghiệm và chẩn đoán hình ảnh liên quan đến thủ thuật',
			'Tóm tắt xuất viện và kế hoạch chăm sóc sau phẫu thuật bằng văn bản',
		],
		exclusions: [
			'Thời gian nằm viện trước khi nhập viện để ổn định bệnh nhân trước khi phê duyệt can thiệp',
			'Thời gian nằm viện hoặc ICU vượt quá thời hạn của gói dịch vụ',
			'Các can thiệp nâng cao như bắc cầu lần thứ hai hoặc sửa van ngoài phạm vi ban đầu',
			'Các thiết bị cấy ghép như máy tạo nhịp tim, nếu không được đề cập trước',
			'Thuốc mang về nhà ngoài bộ thuốc xuất viện tiêu chuẩn',
			'Điều trị các tình trạng có sẵn không liên quan được phát hiện khi đánh giá',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật bắc cầu tim tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói phẫu thuật bắc cầu động mạch vành (CABG) tại Ấn Độ bắt đầu từ 8.000 USD, thấp hơn khoảng 90% so với mức 120.000+ USD thường được tính tại Mỹ. Gói dịch vụ bao gồm đánh giá trước phẫu thuật, bản thân ca can thiệp, thời gian nằm ICU và phòng bệnh, chăm sóc y tế và thuốc tiêu chuẩn.',
			},
			{
				question: 'Tỷ lệ thành công của phẫu thuật tim tại Ấn Độ là bao nhiêu?',
				answer:
					'Các trung tâm tim mạch hàng đầu tại Ấn Độ báo cáo tỷ lệ thành công từ 96% trở lên đối với phẫu thuật bắc cầu và van tim, tương đương với các chương trình tốt nhất tại Mỹ và châu Âu, được hỗ trợ bởi khoa ICU tim mạch chuyên biệt và khối lượng phẫu thuật hàng năm cao.',
			},
			{
				question: 'Tôi cần ở lại Ấn Độ bao lâu để phẫu thuật tim?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 9 ngày (3 ngày ICU, 6 ngày phòng hồi phục) và nên ở lại Ấn Độ tổng cộng khoảng 3 tuần để đội ngũ tim mạch có thể theo dõi quá trình hồi phục trước khi về nước.',
			},
			{
				question: 'Tôi có cần kiểm tra sức khỏe toàn diện trước khi ca phẫu thuật được xác nhận không?',
				answer:
					'Có. Báo cáo của bạn (điện tâm đồ, siêu âm tim, chụp mạch nếu có) sẽ được hội đồng tim mạch của chúng tôi xem xét trước khi hoàn tất kế hoạch điều trị và báo giá, và một buổi tư vấn từ xa với bác sĩ phẫu thuật sẽ được sắp xếp nếu cần.',
			},
			{
				question: 'Có phẫu thuật bắc cầu xâm lấn tối thiểu hoặc không dùng máy tim phổi không?',
				answer:
					'Có, nhiều bệnh viện đối tác của chúng tôi cung cấp bắc cầu không dùng máy tim phổi (tim vẫn đập) và sửa van xâm lấn tối thiểu, giúp giảm thời gian nằm ICU và thời gian hồi phục tùy theo trường hợp của bạn.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo tim mạch gần đây của bạn qua biểu mẫu liên hệ hoặc WhatsApp, và điều phối viên sẽ sắp xếp đánh giá chuyên môn miễn phí cùng báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	orthopedics: {
		name: 'Chỉnh hình',
		shortDescription: 'Thay khớp và y học thể thao với các chương trình hồi phục nhanh.',
		overview:
			'Từ thay khớp gối bằng robot đến hàn cột sống phức tạp, các trung tâm chỉnh hình tại Ấn Độ kết hợp công nghệ cấy ghép hiện đại với các chương trình vật lý trị liệu bài bản, giúp bệnh nhân đứng dậy nhanh hơn.',
		procedures: ['Thay khớp gối', 'Thay khớp háng', 'Hàn cột sống'],
		benefits: [
			'Thay khớp bằng robot và hỗ trợ máy tính có sẵn tại các trung tâm hàng đầu',
			'Vật lý trị liệu bài bản tại bệnh viện ngay từ ngày đầu',
			'Vật liệu cấy ghép chất lượng cao, nhập khẩu quốc tế',
			'Thời gian nằm viện điển hình 3–5 ngày cho thay khớp',
		],
		flagshipProcedure: 'Thay toàn bộ khớp gối',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–6 tuần', successRate: '96–98%' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '96–98%' },
			{ country: 'Đức', waitTime: '3–6 tuần', successRate: '95–97%' },
			{ country: 'Thái Lan', waitTime: '2–3 tuần', successRate: '94–96%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '97%+' },
		],
		inclusions: [
			'Đánh giá chỉnh hình trước phẫu thuật, bao gồm chụp X-quang và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ phẫu thuật và gây mê cho ca thay khớp',
			'Chi phí phòng mổ và vật liệu cấy ghép (chất lượng tiêu chuẩn, nếu không chọn loại cao cấp hơn)',
			'1 ngày ICU/hồi phục cộng 4 ngày phòng riêng',
			'Các buổi vật lý trị liệu bài bản tại bệnh viện',
			'Xét nghiệm, chẩn đoán hình ảnh và thuốc sau phẫu thuật tiêu chuẩn trong thời gian lưu trú',
			'Tóm tắt xuất viện kèm chương trình bài tập tại nhà và kế hoạch hồi phục',
		],
		exclusions: [
			'Vật liệu cấy ghép cao cấp hoặc theo yêu cầu riêng ngoài loại tiêu chuẩn',
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Phẫu thuật hai bên (cả hai đầu gối), nếu không được báo giá riêng',
			'Các buổi vật lý trị liệu ngoại trú sau khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Phẫu thuật chỉnh sửa do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Thay khớp gối tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói thay toàn bộ khớp gối tại Ấn Độ bắt đầu từ 5.500 USD, thấp hơn khoảng 85% so với mức giá thông thường tại Mỹ, bao gồm chi phí bác sĩ phẫu thuật, vật liệu cấy ghép, thời gian nằm viện và vật lý trị liệu tại bệnh viện.',
			},
			{
				question: 'Có thay khớp gối bằng robot không?',
				answer:
					'Có, một số bệnh viện đối tác của chúng tôi cung cấp thay khớp bằng robot và hỗ trợ máy tính, giúp cải thiện độ chính xác của vật liệu cấy ghép và giảm thời gian hồi phục cho các bệnh nhân đủ điều kiện.',
			},
			{
				question: 'Thời gian nằm viện và hồi phục kéo dài bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 5 ngày và nên ở lại Ấn Độ 2–3 tuần để các nhà vật lý trị liệu có thể hướng dẫn quá trình hồi phục ban đầu trước khi về nước.',
			},
			{
				question: 'Những thương hiệu vật liệu cấy ghép nào được sử dụng?',
				answer:
					'Các bệnh viện đối tác của chúng tôi sử dụng tiêu chuẩn là các thương hiệu vật liệu cấy ghép được chứng nhận quốc tế, với tùy chọn cao cấp hơn theo yêu cầu và báo giá riêng.',
			},
			{
				question: 'Có thể thay cả hai đầu gối trong cùng một chuyến đi không?',
				answer:
					'Có, thay khớp gối hai bên đồng thời hoặc theo giai đoạn có thể thực hiện cho các ứng viên phù hợp — bác sĩ phẫu thuật sẽ xác nhận phương án tốt nhất sau khi xem xét phim X-quang và tình trạng sức khỏe tổng quát.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Gửi phim X-quang và tóm tắt triệu chứng của bạn qua biểu mẫu liên hệ, bạn sẽ nhận được đánh giá chuyên môn và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	oncology: {
		name: 'Ung bướu',
		shortDescription: 'Chăm sóc ung bướu đa chuyên khoa kết hợp phẫu thuật, hóa trị và xạ trị định hướng.',
		overview:
			'Điều trị ung thư tại Ấn Độ được cung cấp bởi các hội đồng ung bướu quy tụ bác sĩ phẫu thuật ung bướu, bác sĩ ung bướu nội khoa và chuyên gia xạ trị để xây dựng kế hoạch điều trị phối hợp — cùng mô hình đa chuyên khoa được sử dụng tại các trung tâm ung bướu hàng đầu phương Tây.',
		procedures: ['Phẫu thuật khối u', 'Hóa trị', 'Xạ trị'],
		benefits: [
			'Hội đồng ung bướu đa chuyên khoa cho từng trường hợp',
			'Tiếp cận xạ trị tiên tiến (IMRT, IGRT, tùy chọn xạ trị proton tại các trung tâm chọn lọc)',
			'Chăm sóc toàn diện, từ chẩn đoán đến theo dõi sau điều trị',
			'Cố vấn ung bướu tận tâm hỗ trợ bệnh nhân và gia đình',
		],
		flagshipProcedure: 'Phẫu thuật cắt bỏ khối u',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Vương quốc Anh', waitTime: '2–6 tháng (NHS)', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: 'Thay đổi theo giai đoạn' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: 'Thay đổi theo giai đoạn' },
		],
		inclusions: [
			'Xem xét của hội đồng ung bướu đối với báo cáo sinh thiết, chẩn đoán hình ảnh và giải phẫu bệnh hiện có',
			'Chi phí bác sĩ phẫu thuật, gây mê và đội ngũ ung bướu cho ca can thiệp chính',
			'Chi phí phòng mổ và ICU (2 ngày) cộng 6 ngày phòng riêng',
			'Chăm sóc y tế và thuốc hóa trị/hỗ trợ tiêu chuẩn trong thời gian nằm viện',
			'Chi phí xét nghiệm, chẩn đoán hình ảnh và giải phẫu bệnh liên quan đến thủ thuật chính',
			'Hỗ trợ tận tâm từ cố vấn ung bướu cho bệnh nhân và gia đình',
			'Tóm tắt xuất viện với kế hoạch hóa trị/xạ trị tiếp theo bài bản',
		],
		exclusions: [
			'Các chu kỳ hóa trị hoặc buổi xạ trị bổ sung ngoài gói ban đầu',
			'Các xét nghiệm hồ sơ gen/phân tử, trừ khi được yêu cầu cụ thể',
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Liệu pháp nhắm trúng đích hoặc miễn dịch trị liệu, được báo giá riêng do chi phí biến động',
			'Điều trị các tình trạng không liên quan được phát hiện khi đánh giá',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật ung bướu tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói phẫu thuật cắt bỏ khối u tại Ấn Độ bắt đầu từ 6.000 USD, thấp hơn khoảng 90% so với ca can thiệp tương đương tại Mỹ, bao gồm việc xem xét của hội đồng ung bướu, ca can thiệp, thời gian nằm ICU/phòng bệnh và chăm sóc hỗ trợ ban đầu.',
			},
			{
				question: 'Hóa trị và xạ trị được tính giá như thế nào?',
				answer:
					'Các chu kỳ hóa trị và buổi xạ trị (IMRT/IGRT) được báo giá riêng, tùy theo phác đồ cụ thể của bạn, vì các phác đồ khác nhau rất nhiều tùy theo loại và giai đoạn ung thư — hội đồng ung bướu sẽ cung cấp ước tính chi tiết sau khi xem xét báo cáo của bạn.',
			},
			{
				question: 'Trường hợp của tôi sẽ được một đội ngũ chuyên gia xem xét, hay chỉ một bác sĩ?',
				answer:
					'Mỗi trường hợp đều trải qua hội đồng ung bướu đa chuyên khoa — bác sĩ phẫu thuật ung bướu, bác sĩ ung bướu nội khoa và chuyên gia xạ trị — trước khi kế hoạch điều trị được hoàn tất, cùng mô hình được sử dụng tại các trung tâm ung bướu hàng đầu phương Tây.',
			},
			{
				question: 'Tôi sẽ phải ở lại Ấn Độ bao lâu?',
				answer:
					'Bệnh nhân phẫu thuật thường nằm viện 8 ngày, với thời gian lưu trú tổng cộng khuyến nghị khoảng 4 tuần tại Ấn Độ nếu ca can thiệp được tiếp nối bằng hóa trị hoặc xạ trị.',
			},
			{
				question: 'Tôi có thể xin ý kiến thứ hai trước khi quyết định phẫu thuật không?',
				answer:
					'Có. Gửi báo cáo sinh thiết, chẩn đoán hình ảnh và giải phẫu bệnh của bạn để được hội đồng ung bướu xem xét miễn phí và cho ý kiến thứ hai, trước khi bạn quyết định có đi điều trị hay không.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo chẩn đoán của bạn qua biểu mẫu liên hệ hoặc WhatsApp, và điều phối viên ung bướu của chúng tôi sẽ sắp xếp xem xét của hội đồng cùng ước tính minh bạch trong 48 giờ.',
			},
		],
	},

	'cosmetic-surgery': {
		name: 'Phẫu thuật thẩm mỹ và tạo hình',
		shortDescription: 'Các thủ thuật thẩm mỹ và tái tạo được thực hiện bởi các bác sĩ phẫu thuật được chứng nhận quốc tế.',
		overview:
			'Kết hợp các bác sĩ phẫu thuật được chứng nhận với chăm sóc sau phẫu thuật hướng đến hồi phục theo phong cách khách sạn, Ấn Độ đã trở thành điểm đến ưa chuộng cho các thủ thuật thẩm mỹ và tái tạo — với sự riêng tư và kín đáo mà bệnh nhân quốc tế mong đợi.',
		procedures: ['Nâng mũi', 'Hút mỡ', 'Cấy tóc'],
		detailedProcedures: [
			{
				name: 'Nâng mũi (Phẫu thuật mũi)',
				description:
					'Nâng mũi là một thủ thuật phẫu thuật định hình lại xương và sụn của mũi để thay đổi kích thước, hình dạng hoặc tỷ lệ, hoặc để điều chỉnh các vấn đề về hô hấp do lệch vách ngăn hoặc đường mũi hẹp gây ra. Bác sĩ phẫu thuật có thể thao tác qua các đường rạch nhỏ ẩn bên trong lỗ mũi (kỹ thuật kín) hoặc một đường rạch ngoài nhỏ ở đáy mũi (kỹ thuật mở), tùy vào mức độ điều chỉnh cần thiết. Sụn có thể được cắt tỉa, định hình lại hoặc ghép từ nơi khác trong mũi hoặc tai để tạo cấu trúc. Thủ thuật thường được thực hiện dưới gây mê toàn thân hoặc gây tê tại chỗ kèm an thần và mất một đến ba giờ. Ứng viên bao gồm những người không hài lòng với hình dạng hoặc kích thước mũi, người gặp khó khăn về hô hấp, hoặc bệnh nhân cần chỉnh sửa sau phẫu thuật trước đó. Hồi phục bao gồm sưng và bầm tím trong một đến hai tuần, với nẹp mũi được đeo trong vài ngày đầu và kết quả cuối cùng thấy rõ sau vài tháng khi vết sưng giảm dần. Bệnh nhân quốc tế đến Ấn Độ nâng mũi thường lên kế hoạch tư vấn ban đầu, thực hiện thủ thuật và một lần tái khám trước khi tháo nẹp, cho phép hầu hết quá trình lành thương sớm được theo dõi trực tiếp.',
			},
			{
				name: 'Căng da mặt',
				description:
					'Căng da mặt, hay phẫu thuật rhytidectomy, là một thủ thuật phẫu thuật giải quyết tình trạng da chảy xệ, nếp gấp sâu và mất độ sắc nét dọc theo mặt dưới, đường viền hàm và cổ phát triển theo tuổi tác. Qua các đường rạch thường đặt dọc theo chân tóc và quanh tai, bác sĩ phẫu thuật nâng và định vị lại cơ và mô liên kết bên dưới của mặt (lớp SMAS), loại bỏ da thừa và kéo căng lại phần da còn lại theo đường viền mới. Thủ thuật thường kết hợp với căng da cổ hoặc cấy mỡ để giải quyết các thay đổi liên quan. Thủ thuật được thực hiện dưới gây mê toàn thân hoặc gây tê tại chỗ kèm an thần và thường mất ba đến năm giờ. Ứng viên tốt thường có sức khỏe khá tốt với kỳ vọng thực tế về mức độ cải thiện mà việc căng da có thể mang lại, vì nó giải quyết tình trạng chảy xệ chứ không phải nếp nhăn nhỏ hay tổn thương do nắng. Hồi phục bao gồm sưng, bầm tím và căng cứng trong một đến hai tuần, chỉ khâu được cắt trong khoảng thời gian đó và hầu hết bệnh nhân trở lại hoạt động bình thường trong hai đến ba tuần. Vì thủ thuật cần một giai đoạn tái khám trực tiếp để kiểm tra lành thương và cắt chỉ, bệnh nhân đến Ấn Độ căng da mặt thường lên kế hoạch lưu trú khoảng hai tuần.',
			},
			{
				name: 'Căng da mặt không phẫu thuật',
				description:
					'Căng da mặt không phẫu thuật không phải là một thủ thuật đơn lẻ mà là sự kết hợp các phương pháp tiêm và công nghệ năng lượng được sử dụng để nâng và làm tươi mới khuôn mặt mà không cần rạch hay gây mê toàn thân. Tùy vào mối quan tâm của bệnh nhân, kế hoạch điều trị có thể kết hợp chất làm đầy da để phục hồi thể tích ở má và thái dương, tiêm độc tố botulinum để làm mềm các nếp nhăn động, và công nghệ làm săn chắc da như sóng cao tần hoặc siêu âm (ví dụ HIFU) để kích thích collagen và làm săn da chùng. Các buổi điều trị thường được thực hiện tại phòng khám ngoại trú với kem gây tê tại chỗ, hầu hết các phương pháp mất ba mươi phút đến một giờ. Thời gian nghỉ dưỡng gần như không có ngoài đỏ da tạm thời hoặc sưng nhẹ, nên bệnh nhân thường có thể trở lại hoạt động bình thường ngay trong ngày hoặc ngày hôm sau. Phương pháp này phù hợp với bệnh nhân có dấu hiệu lão hóa sớm đến trung bình muốn cải thiện rõ rệt mà không cần phẫu thuật, mặc dù kết quả tinh tế hơn và tạm thời hơn so với căng da phẫu thuật, thường kéo dài từ vài tháng đến vài năm tùy phương pháp điều trị. Vì các buổi điều trị nhanh và có thể lặp lại, một số bệnh nhân kết hợp căng da không phẫu thuật với các thủ thuật khác trong một chuyến đi Ấn Độ, với các lần điều trị duy trì được lên kế hoạch cho chuyến đi sau hoặc qua nhà cung cấp tại địa phương.',
			},
			{
				name: 'Căng da mặt bằng chỉ',
				description:
					'Căng da mặt bằng chỉ là một thủ thuật xâm lấn tối thiểu sử dụng các sợi chỉ phẫu thuật mảnh, tự tiêu, thường làm từ polydioxanone (PDO), để nâng da chảy xệ và kích thích sản sinh collagen mà không cần đường rạch như căng da mặt truyền thống. Các sợi chỉ, một số có gai hoặc nón nhỏ, được đưa vào dưới da bằng kim mỏng hoặc canula và cố định để định vị lại nhẹ nhàng mô ở má, đường viền hàm hoặc chân mày trước khi cắt bỏ phần đầu thừa. Thủ thuật được thực hiện dưới gây tê tại chỗ trong môi trường ngoại trú và thường mất ba mươi đến sáu mươi phút. Trong những tuần sau đó, cơ thể hình thành collagen quanh các sợi chỉ đang tiêu dần, dần dần tăng cường hiệu ứng nâng ban đầu. Phương pháp này phù hợp với bệnh nhân có dấu hiệu chảy xệ sớm chưa sẵn sàng phẫu thuật, kết quả rõ ràng khiêm tốn hơn và ngắn hơn, thường mười hai đến mười tám tháng, so với căng da phẫu thuật. Thời gian nghỉ dưỡng tối thiểu, có một số sưng, bầm tím hoặc cảm giác căng trong vài ngày. Vì hồi phục ngắn, căng da bằng chỉ thường có thể được lên lịch cùng với các điều trị khác trong một chuyến đi đến Ấn Độ, mặc dù bệnh nhân nên thảo luận về thời điểm với bác sĩ phẫu thuật nếu kết hợp với các thủ thuật xâm lấn hơn.',
			},
			{
				name: 'Phẫu thuật mí mắt (Blepharoplasty)',
				description:
					'Phẫu thuật mí mắt là một thủ thuật phẫu thuật loại bỏ hoặc định vị lại da, cơ và mỡ thừa quanh mí mắt trên hoặc dưới để giải quyết tình trạng sụp mí, phù nề hoặc quầng thâm dưới mắt. Trong phẫu thuật mí trên, bác sĩ phẫu thuật rạch một đường dọc theo nếp gấp tự nhiên để loại bỏ mô thừa; trong phẫu thuật mí dưới, đường rạch có thể đặt ngay dưới chân mi hoặc bên trong mí mắt (phương pháp xuyên kết mạc) để tránh sẹo nhìn thấy. Thủ thuật thường được thực hiện dưới gây tê tại chỗ kèm an thần và mất một đến hai giờ tùy vào việc điều trị một hay cả hai mí. Ứng viên bao gồm những người có da mí trên che khuất tầm nhìn, những người khó chịu vì mắt trông mệt mỏi hoặc phù nề, và bệnh nhân muốn có vẻ ngoài tỉnh táo hơn. Hồi phục bao gồm sưng và bầm tím trong một đến hai tuần, chỉ khâu được cắt trong khoảng một tuần và hầu hết bệnh nhân thoải mái ra ngoài trong vòng mười đến mười bốn ngày khi dùng trang điểm hoặc kính râm. Vì mô mí mắt lành tương đối nhanh nhưng vẫn cần kiểm tra chỉ khâu và đánh giá tiến triển, bệnh nhân đến Ấn Độ phẫu thuật mí mắt thường lên kế hoạch lưu trú mười ngày đến hai tuần để hoàn tất thủ thuật và tái khám sớm.',
			},
			{
				name: 'Phẫu thuật tạo hình quanh mắt (Oculoplastic)',
				description:
					'Phẫu thuật tạo hình quanh mắt là một nhánh chuyên khoa của nhãn khoa và phẫu thuật thẩm mỹ điều trị các vấn đề về cấu trúc và chức năng của mí mắt, lệ đạo, hốc mắt và mô xung quanh. Nó bao gồm nhiều thủ thuật, bao gồm sửa chữa mí mắt sụp (ptosis) ảnh hưởng đến thị lực, điều chỉnh mí mắt lệch vị trí như lật mí ngoài hoặc lật mí trong, điều trị tắc lệ đạo, loại bỏ khối u hoặc nang mí mắt kèm tái tạo, sửa chữa gãy xương hốc mắt và tái tạo hốc mắt sau chấn thương hoặc cắt bỏ mắt. Các bác sĩ phẫu thuật được đào tạo cả về nhãn khoa và kỹ thuật phẫu thuật thẩm mỹ thực hiện các thủ thuật này, có thể dưới gây tê tại chỗ hoặc gây mê toàn thân tùy độ phức tạp và vị trí. Ứng viên là bệnh nhân có vấn đề chức năng ảnh hưởng đến thị lực, sự thoải mái của mắt hoặc khả năng nhắm mí, cũng như những người cần tái tạo sau chấn thương, cắt bỏ khối u hoặc phẫu thuật trước đó. Vì nhiều tình trạng này ảnh hưởng đến cách mắt được bảo vệ và khả năng nhắm kín, đánh giá thường bao gồm khám mắt chi tiết cùng với đánh giá phẫu thuật. Hồi phục rất khác nhau tùy thủ thuật, từ vài ngày cho các sửa chữa mí mắt nhỏ đến vài tuần cho tái tạo hốc mắt, các trung tâm tạo hình quanh mắt tại Ấn Độ thường xử lý các ca phức tạp cần phẫu thuật theo từng giai đoạn và hình ảnh theo dõi.',
			},
			{
				name: 'Tiêm Botox',
				description:
					'Botox là thương hiệu nổi tiếng nhất của độc tố botulinum loại A, một loại protein tinh khiết được tiêm với liều lượng nhỏ, chính xác vào các cơ mặt để tạm thời làm giãn các cơn co cơ gây ra nếp nhăn động, chẳng hạn như nếp nhăn cau mày giữa hai lông mày, vết chân chim quanh mắt và nếp nhăn ngang trán. Độc tố hoạt động bằng cách chặn tín hiệu thần kinh đến cơ được điều trị, nên da bên trên trở nên mịn màng trong khi biểu cảm xung quanh vẫn phần lớn tự nhiên nếu liều lượng được tính toán tốt. Điều trị được thực hiện tại phòng khám với kim nhỏ và không cần gây mê ngoài kem gây tê tùy chọn, thường mất mười đến hai mươi phút cho nhiều điểm tiêm. Hiệu quả bắt đầu trong vòng ba đến bảy ngày, đạt đỉnh khoảng hai tuần, và thường kéo dài ba đến bốn tháng trước khi hoạt động cơ dần trở lại, lúc đó cần điều trị lặp lại để duy trì hiệu quả. Botox cũng được sử dụng trong y tế cho các tình trạng như đổ mồ hôi quá mức, đau nửa đầu mãn tính và một số rối loạn co thắt cơ. Hầu như không có thời gian nghỉ dưỡng ngoài đỏ nhẹ hoặc vết bầm nhỏ tại điểm tiêm, khiến đây là lựa chọn bổ sung phổ biến cho bệnh nhân đã đến Ấn Độ cho các điều trị thẩm mỹ hoặc y tế khác.',
			},
			{
				name: 'Phẫu thuật tạo hình tai (Otoplasty)',
				description:
					'Tạo hình tai là một thủ thuật phẫu thuật định hình lại sụn của tai ngoài, phổ biến nhất là để kéo tai vểnh lại gần đầu hơn hoặc điều chỉnh các bất thường về hình dạng hoặc kích thước tai có từ khi sinh ra hoặc do chấn thương. Bác sĩ phẫu thuật thường rạch một đường sau tai, sau đó khía, gấp hoặc khâu sụn vào vị trí tự nhiên hơn trước khi đóng vết rạch để sẹo nếu có được giấu trong nếp gấp tự nhiên. Thủ thuật có thể được thực hiện dưới gây tê tại chỗ kèm an thần ở người lớn hoặc gây mê toàn thân ở trẻ em, thường mất một đến hai giờ cho cả hai tai. Đây là một trong số ít thủ thuật thẩm mỹ thường được thực hiện trên trẻ em, thường là khi sụn tai đã phát triển đủ, thường nhằm giải quyết sự tự ti trước tuổi đi học. Hồi phục bao gồm băng đầu đệm trong vài ngày đầu, sau đó là băng đô nhẹ hơn đeo vào ban đêm trong vài tuần để bảo vệ vị trí mới trong khi lành. Sưng và khó chịu nhẹ giảm trong vòng một đến hai tuần. Các gia đình đưa con đến Ấn Độ tạo hình tai thường lên kế hoạch lưu trú ngắn bao gồm phẫu thuật và lần thay băng đầu tiên.',
			},
			{
				name: 'Cấy tóc',
				description:
					'Cấy tóc di chuyển các nang tóc từ vùng cho, thường là phía sau hoặc hai bên da đầu nơi tóc mọc tự nhiên ít bị rụng, đến các vùng hói rõ rệt. Hai kỹ thuật chính là cấy tóc theo đơn vị nang (FUT), trong đó một dải da đầu được lấy ra và chia thành các mảnh ghép riêng lẻ, và chiết tách đơn vị nang (FUE), trong đó các nang tóc được lấy từng cái một bằng dụng cụ đục nhỏ, để lại sẹo tối thiểu. Các mảnh ghép được đặt vào các đường rạch nhỏ tại vị trí nhận theo góc độ và mật độ tự nhiên của tóc xung quanh để có kết quả trông tự nhiên. Thủ thuật được thực hiện dưới gây tê tại chỗ và, tùy vào số lượng mảnh ghép cần thiết, mất khoảng bốn đến tám giờ, đôi khi chia thành hai buổi. Ứng viên phù hợp là nam và nữ bị rụng tóc theo kiểu hình và có đủ nguồn tóc cho, được đánh giá trước về nguyên nhân gây rụng tóc. Tóc được cấy thường rụng trong vài tuần trước khi mọc lại dần, với sự mọc mới rõ rệt sau sáu đến mười hai tháng. Vì bản thân ca phẫu thuật có thời gian nghỉ dưỡng khiêm tốn, bệnh nhân đến Ấn Độ thường lên kế hoạch lưu trú khoảng một tuần để da đầu ổn định trước khi bay về nước.',
			},
			{
				name: 'Nâng ngực (Augmentation)',
				description:
					'Nâng ngực là một thủ thuật phẫu thuật làm tăng kích thước và thay đổi hình dạng ngực bằng túi độn silicone hoặc nước muối, hoặc trong một số trường hợp là mỡ tự thân của bệnh nhân chuyển từ vùng khác của cơ thể. Bác sĩ phẫu thuật đặt túi độn qua đường rạch, thường quanh quầng vú, trong nếp gấp tự nhiên dưới ngực, hoặc ở nách, định vị túi độn phía trên hoặc dưới cơ ngực tùy giải phẫu và kết quả mong muốn của bệnh nhân. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất một đến hai giờ. Ứng viên bao gồm phụ nữ cảm thấy kích thước ngực không cân đối với vóc dáng, những người muốn phục hồi thể tích đã mất sau khi mang thai hoặc thay đổi cân nặng, và bệnh nhân tái tạo ngực. Hồi phục bao gồm sưng, căng cứng và hạn chế cử động cánh tay trong một đến hai tuần, hầu hết bệnh nhân trở lại hoạt động nhẹ trong thời gian đó và tập thể dục đầy đủ sau bốn đến sáu tuần. Túi độn không được coi là thiết bị trọn đời và có thể cần theo dõi hoặc thay thế sau này. Bệnh nhân đến Ấn Độ nâng ngực thường lên kế hoạch lưu trú mười đến mười bốn ngày để bác sĩ phẫu thuật kiểm tra vết rạch và quá trình lành thương sớm trước khi về nước.',
			},
			{
				name: 'Thu nhỏ ngực',
				description:
					'Phẫu thuật thu nhỏ ngực, hay tạo hình giảm thể tích ngực, loại bỏ mỡ, mô tuyến và da thừa ở ngực để giảm kích thước và trọng lượng ngực, đồng thời định vị lại núm vú và quầng vú cao hơn trên bầu ngực nhỏ hơn. Thủ thuật thường được thực hiện qua kiểu đường rạch hình neo hoặc dọc, bác sĩ phẫu thuật định hình lại mô còn lại để tạo đường viền cân đối trước khi đóng vết rạch. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất hai đến bốn giờ. Ứng viên thường là bệnh nhân gặp các triệu chứng thể chất do ngực quá lớn, chẳng hạn như đau cổ, lưng hoặc vai, kích ứng da dưới nếp gấp ngực, hoặc hạn chế vận động thể chất, cũng như những người muốn cân đối hơn với vóc dáng. Hồi phục bao gồm sưng, bầm tím và đau nhức trong một đến hai tuần, hầu hết bệnh nhân trở lại hoạt động hàng ngày bình thường trong hai tuần và tập thể dục sau bốn đến sáu tuần, khi được bác sĩ phẫu thuật cho phép. Cảm giác ở vùng núm vú có thể bị thay đổi tạm thời hoặc, ít phổ biến hơn, vĩnh viễn. Vì thu nhỏ ngực thường có lợi ích chức năng đã được ghi nhận bên cạnh lợi ích thẩm mỹ, bệnh nhân đến Ấn Độ cho thủ thuật này thường sắp xếp lưu trú hai tuần để cắt chỉ và kiểm tra vết thương.',
			},
			{
				name: 'Nâng ngực chảy xệ (Breast Lift)',
				description:
					'Nâng ngực chảy xệ, hay tạo hình treo ngực (mastopexy), nâng và định hình lại ngực đã chảy xệ do tuổi tác, mang thai, cho con bú hoặc thay đổi cân nặng bằng cách loại bỏ da thừa và định vị lại mô ngực còn lại cùng phức hợp núm vú-quầng vú cao hơn trên ngực. Tùy mức độ chảy xệ, bác sĩ phẫu thuật có thể dùng đường rạch ngắn hơn quanh quầng vú hoặc đường rạch hình neo dài hơn kéo xuống và dọc theo nếp gấp ngực. Khác với nâng ngực bằng túi độn, thủ thuật treo ngực không thêm thể tích, nên bệnh nhân muốn ngực vừa đầy đặn hơn vừa cao hơn có thể kết hợp mastopexy với túi độn trong cùng một ca mổ. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất hai đến ba giờ. Ứng viên tốt là bệnh nhân có mô ngực chảy xệ và độ đàn hồi da đủ, cân nặng tương đối ổn định, vì việc mang thai hoặc thay đổi cân nặng đáng kể trong tương lai có thể ảnh hưởng đến kết quả. Hồi phục bao gồm sưng và hạn chế cử động cánh tay trong một đến hai tuần, hầu hết bệnh nhân trở lại hoạt động nhẹ trong thời gian đó và tập thể dục đầy đủ sau bốn đến sáu tuần. Bệnh nhân đến Ấn Độ nâng ngực chảy xệ thường lên kế hoạch lưu trú khoảng hai tuần để hoàn tất phẫu thuật và tái khám kiểm tra vết rạch.',
			},
			{
				name: 'Hút mỡ',
				description:
					'Hút mỡ là một thủ thuật phẫu thuật tạo hình cơ thể loại bỏ các vùng mỡ cục bộ không đáp ứng với chế độ ăn uống và tập luyện, từ các vùng như bụng, hông, đùi, cánh tay hoặc cằm. Qua các đường rạch nhỏ, bác sĩ phẫu thuật đưa vào một canula mỏng kết nối với thiết bị hút và di chuyển qua lớp mỡ để phá vỡ và loại bỏ tế bào mỡ, với các kỹ thuật như hút mỡ tumescent, hỗ trợ siêu âm hoặc hỗ trợ laser được sử dụng để giúp loại bỏ mỡ dễ dàng hơn và hỗ trợ co da. Thủ thuật được thực hiện dưới gây mê toàn thân hoặc gây tê tại chỗ kèm an thần, tùy vùng và mức độ điều trị, thường mất một đến ba giờ. Ứng viên tốt là người gần đạt cân nặng mục tiêu, có độ đàn hồi da tốt và kỳ vọng thực tế, vì hút mỡ là thủ thuật tạo hình chứ không phải điều trị giảm cân. Hồi phục bao gồm sưng, bầm tím và mặc đồ nén trong vài tuần, hầu hết bệnh nhân trở lại hoạt động nhẹ trong vòng một tuần và đường nét cuối cùng thấy rõ sau ba đến sáu tháng khi hết sưng. Bệnh nhân đến Ấn Độ hút mỡ thường lên kế hoạch lưu trú khoảng mười ngày để vừa đồ nén, tái khám sớm và theo dõi quá trình lành thương ban đầu.',
			},
			{
				name: 'Tạo hình thành bụng (Tummy Tuck)',
				description:
					'Tạo hình thành bụng, hay phẫu thuật tummy tuck, loại bỏ da và mỡ thừa ở bụng và làm săn chắc các cơ bụng bên dưới, có thể bị kéo giãn hoặc tách ra (diastasis recti) sau khi mang thai hoặc giảm cân đáng kể. Qua đường rạch ngang thấp ở bụng, bác sĩ phẫu thuật sửa chữa lớp cơ bằng chỉ khâu bên trong, loại bỏ mô thừa và định vị lại rốn trước khi đóng vết rạch, đôi khi kết hợp thủ thuật với hút mỡ để tạo đường nét thêm. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất hai đến bốn giờ. Ứng viên thường có cân nặng ổn định, khỏe mạnh với da bụng chùng hoặc cơ tách rời không cải thiện khi tập luyện, và không có kế hoạch mang thai trong tương lai, vì mang thai sau đó có thể làm mất tác dụng sửa chữa cơ. Hồi phục bao gồm vài tuần hạn chế hoạt động, mặc đồ nén để hỗ trợ lành thương, ống dẫn lưu thường được tháo trong tuần đầu, hầu hết bệnh nhân trở lại hoạt động bình thường, không gắng sức trong bốn đến sáu tuần. Vì hồi phục từ sửa chữa cơ bụng mất nhiều thời gian hơn nhiều thủ thuật tạo hình cơ thể khác, bệnh nhân đến Ấn Độ tạo hình thành bụng thường lên kế hoạch lưu trú hai đến ba tuần để ống dẫn lưu được tháo và quá trình lành thương được theo dõi trước khi bay.',
			},
			{
				name: 'Nâng mông kiểu Brazil (BBL)',
				description:
					'Nâng mông kiểu Brazil (BBL) sử dụng mỡ tự thân của bệnh nhân, thu được qua hút mỡ từ các vùng như bụng, hông hoặc đùi, để tăng thể tích và tạo hình cho mông. Mỡ thu được được xử lý để tách các tế bào mỡ còn sống trước khi được tiêm cẩn thận với nhiều lượng nhỏ vào các lớp khác nhau của mông để tạo đường nét tròn đầy hơn, trong khi các vùng cho cũng được hưởng lợi từ việc tạo hình do hút mỡ. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất hai đến bốn giờ tùy lượng mỡ được thu và ghép. Ứng viên là bệnh nhân có đủ mỡ nguồn để thu thập và muốn hình dạng mông đầy đặn hơn mà không cần túi độn. Vì mỡ ghép cần nguồn cung cấp máu ổn định để tồn tại, bệnh nhân thường được yêu cầu tránh ngồi trực tiếp lên mông trong một thời gian sau phẫu thuật, sử dụng gối đặc biệt hoặc nằm sấp thay thế, và một phần mỡ ghép sẽ tự nhiên bị hấp thụ lại trong những tháng sau đó. Hồi phục bao gồm mặc đồ nén trong vài tuần và tránh tập thể dục gắng sức trong khoảng sáu tuần. Bệnh nhân đến Ấn Độ làm BBL thường lên kế hoạch lưu trú khoảng hai tuần để hồi phục sớm và tái khám trước khi về nước.',
			},
			{
				name: 'Nâng mông bằng túi độn',
				description:
					'Nâng mông bằng túi độn tăng kích thước mông và cải thiện đường nét bằng túi độn silicone hoặc ghép mỡ, được chọn dựa trên lượng mỡ nguồn có sẵn, giải phẫu và kết quả mong muốn của bệnh nhân. Khi sử dụng túi độn, bác sĩ phẫu thuật đặt chúng qua một đường rạch nhỏ, thường trong nếp gấp mông, định vị bên trong hoặc dưới cơ mông để có kết quả ổn định, cảm giác tự nhiên. Khi ưu tiên ghép mỡ, mỡ được thu từ vùng khác bằng hút mỡ và tiêm vào mông, cũng có lợi ích tạo hình cho vùng cho. Nâng mông bằng túi độn được thực hiện dưới gây mê toàn thân và thường mất khoảng hai giờ, trong khi các thủ thuật ghép mỡ mất nhiều thời gian hơn tùy lượng chuyển. Ứng viên cho túi độn thường là bệnh nhân có ít mỡ nguồn, trong khi những người có đủ mỡ ở nơi khác có thể thích ghép mỡ để tránh túi độn ngoại lai. Hồi phục cho cả hai phương pháp đều cần tránh áp lực trực tiếp lên mông trong vài tuần, khuyến nghị dùng gối chuyên dụng hoặc thay đổi tư thế ngủ, cùng với đồ nén và trở lại tập thể dục dần dần trong bốn đến sáu tuần. Bệnh nhân cân nhắc nâng mông tại Ấn Độ thường thảo luận cả hai lựa chọn túi độn và ghép mỡ với bác sĩ phẫu thuật trong buổi tư vấn để xác định lựa chọn phù hợp hơn với vóc dáng của mình.',
			},
			{
				name: 'Nâng cánh tay',
				description:
					'Nâng cánh tay, hay phẫu thuật brachioplasty, loại bỏ da và mỡ thừa ở cánh tay trên và làm săn chắc mô bên dưới để tạo đường nét mịn màng, săn chắc hơn, giải quyết tình trạng da chùng, treo lủng lẳng có thể phát triển sau khi giảm cân đáng kể hoặc do tuổi tác. Bác sĩ phẫu thuật thường rạch một đường ở mặt trong hoặc sau cánh tay trên, kéo dài từ khuỷu tay đến nách tùy lượng da cần loại bỏ, và có thể kết hợp thủ thuật với hút mỡ để tinh chỉnh đường nét thêm. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất khoảng hai giờ. Ứng viên là bệnh nhân có da cánh tay trên chùng, chảy xệ không cải thiện khi tập luyện, thường sau khi giảm cân nhiều, có cân nặng ổn định và sức khỏe tổng thể tốt. Hồi phục bao gồm mặc đồ nén trong vài tuần, sưng và hạn chế cử động cánh tay trong một đến hai tuần đầu và trở lại hoạt động bình thường dần dần trong bốn đến sáu tuần. Vì sẹo kết quả chạy dọc theo chiều dài mặt trong cánh tay, bệnh nhân được tư vấn về chăm sóc sẹo trong quá trình hồi phục. Bệnh nhân đến Ấn Độ nâng cánh tay thường lên kế hoạch lưu trú khoảng hai tuần để cắt chỉ và theo dõi vết thương.',
			},
			{
				name: 'Nâng đùi',
				description:
					'Nâng đùi, hay phẫu thuật thighplasty, loại bỏ da và mỡ thừa ở đùi trong hoặc ngoài và làm săn chắc mô bên dưới để tạo đường nét mịn màng hơn, thường dành cho bệnh nhân còn lại da chùng, chảy xệ sau khi giảm cân đáng kể. Tùy vùng và lượng điều chỉnh cần thiết, bác sĩ phẫu thuật có thể dùng đường rạch ở nếp bẹn cho nâng đùi trong, hoặc đường rạch kéo dài xuống đùi ngoài cho việc loại bỏ da nhiều hơn, đôi khi kết hợp với hút mỡ. Thủ thuật được thực hiện dưới gây mê toàn thân và thường mất hai đến ba giờ. Ứng viên có cân nặng ổn định với da đùi chùng không đáp ứng với tập luyện, và hiểu rằng đánh đổi cho da săn chắc hơn là một đường sẹo nhìn thấy dọc theo đường rạch. Hồi phục bao gồm mặc đồ nén, tránh hoạt động gắng sức và hạn chế đứng hoặc đi bộ kéo dài trong một đến hai tuần đầu, trở lại hoạt động bình thường dần dần trong bốn đến sáu tuần. Vì các đường rạch nâng đùi nằm ở vùng ma sát và cử động, chăm sóc vết thương cẩn thận trong giai đoạn lành thương sớm là quan trọng. Bệnh nhân đến Ấn Độ nâng đùi thường lên kế hoạch lưu trú khoảng hai tuần để bác sĩ phẫu thuật theo dõi quá trình lành thương.',
			},
			{
				name: 'Thu nhỏ môi lớn/môi bé (Labiaplasty)',
				description:
					'Labiaplasty là một thủ thuật phẫu thuật thu nhỏ hoặc định hình lại môi bé (các nếp gấp bên trong của âm hộ), và ít phổ biến hơn là môi lớn, để giải quyết sự khó chịu hoặc tự ti liên quan đến kích thước hoặc sự không đối xứng của chúng. Sử dụng kỹ thuật cắt tỉa, loại bỏ mô thừa dọc theo mép, hoặc kỹ thuật hình nêm, loại bỏ một phần hình chữ V trong khi giữ nguyên mép tự nhiên, bác sĩ phẫu thuật định hình lại mô và đóng vết rạch bằng chỉ khâu tự tiêu. Thủ thuật thường được thực hiện dưới gây tê tại chỗ kèm an thần hoặc gây mê toàn thân và mất khoảng một đến hai giờ. Ứng viên bao gồm bệnh nhân gặp khó chịu thể chất do môi lớn hoặc không đều, chẳng hạn như cọ xát hoặc đau khi tập luyện, cũng như những người muốn thay đổi vì sự thoải mái cá nhân. Hồi phục bao gồm sưng và đau nhức trong một đến hai tuần, bệnh nhân được khuyên tránh tập luyện gắng sức, quần áo bó sát và quan hệ tình dục trong khoảng bốn đến sáu tuần trong khi mô lành hoàn toàn. Vì thủ thuật nhạy cảm và hồi phục được hưởng lợi từ môi trường yên tĩnh, riêng tư, bệnh nhân đến Ấn Độ làm labiaplasty thường sắp xếp lưu trú kín đáo khoảng mười ngày đến hai tuần để tái khám trước khi về nước.',
			},
			{
				name: 'Phẫu thuật xóa sẹo',
				description:
					'Phẫu thuật xóa sẹo bao gồm nhiều kỹ thuật phẫu thuật được sử dụng để cải thiện ngoại hình của sẹo do chấn thương, bỏng, mụn trứng cá hoặc phẫu thuật trước đó để lại, vì không có phương pháp nào có thể xóa sẹo hoàn toàn nhưng nhiều phương pháp có thể làm phẳng, hẹp hơn hoặc ít rõ ràng hơn. Tùy loại sẹo, các lựa chọn bao gồm chỉnh sửa sẹo, trong đó sẹo cũ được phẫu thuật loại bỏ và vết thương được đóng lại bằng kỹ thuật chính xác hơn để khuyến khích lành thương tinh tế hơn; ghép da hoặc phẫu thuật vạt da cho các vùng sẹo lớn hơn; và kỹ thuật Z-plasty hoặc W-plasty, định vị lại sẹo dọc theo đường nét da tự nhiên để làm cho nó ít gây chú ý về mặt thị giác hơn. Các trường hợp đơn giản hơn có thể được xử lý bằng tiêm steroid, tái tạo bề mặt da bằng laser hoặc lăn kim thay vì phẫu thuật. Loại gây mê sử dụng phụ thuộc vào kích thước, độ sâu và vị trí của sẹo, từ gây tê tại chỗ cho chỉnh sửa nhỏ đến gây mê toàn thân cho ghép da. Ứng viên là bệnh nhân có sẹo gây hạn chế chức năng, chẳng hạn như căng cứng giới hạn cử động, hoặc lo ngại rõ rệt về mặt thẩm mỹ. Hồi phục thay đổi từ vài ngày cho các chỉnh sửa nhỏ đến vài tuần cho ghép da, kết quả cuối cùng thấy rõ sau vài tháng khi sẹo mới trưởng thành. Bệnh nhân đến Ấn Độ chỉnh sửa sẹo thường được đánh giá sẹo trong buổi tư vấn để xác định kỹ thuật phù hợp nhất trước khi lên lịch phẫu thuật.',
			},
		],
		benefits: [
			'Bác sĩ phẫu thuật tạo hình và tái tạo được chứng nhận',
			'Phòng hồi phục riêng tư, kín đáo, tách biệt với khu bệnh nhân chung của bệnh viện',
			'Kỹ thuật hiện đại, bao gồm cấy tóc FUE và hút mỡ VASER',
			'Tư vấn đầy đủ trước/sau với hình ảnh 3D tại các phòng khám chọn lọc',
		],
		flagshipProcedure: 'Nâng mũi',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '2–4 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Vương quốc Anh', waitTime: '3–6 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Đức', waitTime: '2–4 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Thái Lan', waitTime: '1–2 tuần', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
			{ country: 'Ấn Độ', waitTime: '3–7 ngày', successRate: 'Mức độ hài lòng của bệnh nhân cao' },
		],
		inclusions: [
			'Tư vấn với hình ảnh 3D và lập kế hoạch trước phẫu thuật',
			'Chi phí bác sĩ phẫu thuật cho thủ thuật',
			'Chi phí phòng mổ và gây mê',
			'Một đêm tại phòng hồi phục riêng',
			'Băng gạc sau phẫu thuật, đồ nén y tế và buổi tái khám đầu tiên',
			'Thuốc tiêu chuẩn trong thời gian lưu trú hồi phục',
		],
		exclusions: [
			'Các thủ thuật kết hợp (vd: nâng mũi và độn cằm), nếu không được báo giá cùng nhau',
			'Thời gian hồi phục vượt quá một đêm, hoặc chăm sóc sau phẫu thuật kéo dài theo phong cách khách sạn',
			'Phẫu thuật chỉnh sửa thẩm mỹ sau giai đoạn lành thương ban đầu',
			'Thuốc mang về nhà ngoài bộ thuốc xuất viện tiêu chuẩn',
			'Đồ nén hoặc sản phẩm chăm sóc sẹo ngoài phần được cung cấp khi xuất viện',
		],
		faqs: [
			{
				question: 'Nâng mũi tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Nâng mũi tại Ấn Độ bắt đầu từ 2.000 USD, thấp hơn khoảng 75–85% so với Mỹ hoặc Anh, bao gồm tư vấn, can thiệp, gây mê và một đêm hồi phục riêng.',
			},
			{
				question: 'Các bác sĩ phẫu thuật có được đào tạo quốc tế không?',
				answer:
					'Có, các bác sĩ phẫu thuật thẩm mỹ đối tác của chúng tôi đều được chứng nhận và nhiều người đã được đào tạo thêm hoặc thực tập chuyên sâu tại Mỹ, Anh hoặc châu Âu về phẫu thuật thẩm mỹ và tái tạo.',
			},
			{
				question: 'Mức độ riêng tư và kín đáo được đảm bảo như thế nào?',
				answer:
					'Bệnh nhân hồi phục tại các phòng riêng, tách biệt với khu bệnh nhân chung của bệnh viện, và mọi buổi tư vấn cùng hồ sơ đều được xử lý với tính bảo mật nghiêm ngặt.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết các thủ thuật thẩm mỹ cần khoảng 1–2 tuần tại Ấn Độ cho ca can thiệp và tái khám ban đầu, mặc dù điều này thay đổi tùy theo thủ thuật — bác sĩ phẫu thuật sẽ xác nhận lịch trình chính xác trong buổi tư vấn.',
			},
			{
				question: 'Tôi có thể kết hợp nhiều thủ thuật trong một chuyến đi không?',
				answer:
					'Có, nhiều bệnh nhân kết hợp các thủ thuật như nâng mũi với hút mỡ trong một chuyến đi; bác sĩ phẫu thuật sẽ tư vấn những gì có thể thực hiện an toàn cùng nhau, tùy theo tình trạng sức khỏe và nhu cầu hồi phục của bạn.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ mục tiêu và hình ảnh của bạn qua biểu mẫu liên hệ, đội ngũ của chúng tôi sẽ sắp xếp buổi tư vấn riêng với hình ảnh 3D và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	fertility: {
		name: 'Điều trị hiếm muộn',
		shortDescription: 'Thụ tinh trong ống nghiệm và chăm sóc sinh sản với tỷ lệ thành công cao cùng phác đồ cá nhân hóa.',
		overview:
			'Các phòng khám hiếm muộn tại Ấn Độ báo cáo tỷ lệ thành công tương đương với các trung tâm IVF hàng đầu thế giới, với phác đồ nội tiết cá nhân hóa, phòng lab phôi học riêng và không có tình trạng chờ đợi nhiều tháng như thường thấy ở châu Âu và Bắc Mỹ.',
		procedures: ['Thụ tinh trong ống nghiệm (IVF)', 'Bơm tinh trùng vào buồng tử cung (IUI)', 'Đông lạnh trứng'],
		benefits: [
			'Phòng lab phôi học và sàng lọc di truyền riêng',
			'Phác đồ kích thích nội tiết cá nhân hóa',
			'Không có tình trạng chờ đợi nhiều tháng — các chu kỳ thường bắt đầu trong vài tuần',
			'Gói dịch vụ trọn gói bao gồm thuốc, theo dõi và bản thân thủ thuật',
		],
		flagshipProcedure: 'Chu kỳ IVF',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '40–50% mỗi chu kỳ' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '35–45% mỗi chu kỳ' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '35–45% mỗi chu kỳ' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '40–48% mỗi chu kỳ' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '40–50% mỗi chu kỳ' },
		],
		inclusions: [
			'Đánh giá hiếm muộn ban đầu, bao gồm phân tích nội tiết và siêu âm',
			'Các buổi theo dõi kích thích buồng trứng',
			'Thủ thuật lấy trứng và chi phí gây mê',
			'Phôi học, thụ tinh và nuôi cấy phôi riêng',
			'Thủ thuật chuyển một phôi',
			'Thuốc hiếm muộn tiêu chuẩn cho chu kỳ kích thích',
		],
		exclusions: [
			'Trứng hiến, tinh trùng hiến hoặc các thỏa thuận mang thai hộ',
			'Xét nghiệm di truyền tiền làm tổ (PGT), trừ khi được yêu cầu cụ thể',
			'Các lần chuyển phôi bổ sung ngoài lần đầu, hoặc chu kỳ chuyển phôi đông lạnh',
			'Thuốc ngoài phác đồ kích thích tiêu chuẩn',
			'Điều trị vô sinh nam, như ICSI/TESA, nếu không được báo giá riêng',
		],
		faqs: [
			{
				question: 'Điều trị IVF tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Một chu kỳ IVF tại Ấn Độ bắt đầu từ 3.000 USD, thấp hơn khoảng 80% so với Mỹ, bao gồm đánh giá, theo dõi kích thích, lấy trứng, phôi học và chuyển một phôi.',
			},
			{
				question: 'Tỷ lệ thành công của IVF tại Ấn Độ là bao nhiêu?',
				answer:
					'Các phòng khám hiếm muộn hàng đầu tại Ấn Độ báo cáo tỷ lệ thành công mỗi chu kỳ là 40–50%, tương đương với các phòng khám tốt nhất tại Mỹ và châu Âu, kết quả phụ thuộc vào độ tuổi và các yếu tố sinh sản nền tảng.',
			},
			{
				question: 'Một chu kỳ IVF kéo dài bao lâu?',
				answer:
					'Một chu kỳ đầy đủ, từ kích thích đến chuyển phôi, thường kéo dài 2–3 tuần, vì vậy hầu hết bệnh nhân quốc tế dự kiến ở lại Ấn Độ khoảng 3 tuần để hoàn thành theo dõi, lấy trứng và chuyển phôi.',
			},
			{
				question: 'Bạn có cung cấp chương trình trứng hiến hoặc mang thai hộ không?',
				answer:
					'Những thỏa thuận này liên quan đến các bước pháp lý và y tế bổ sung và được báo giá riêng — hãy liên hệ điều phối viên hiếm muộn của chúng tôi để thảo luận về điều kiện và quy định hiện hành.',
			},
			{
				question: 'Điều trị có thể bắt đầu mà không cần đi ngay không?',
				answer:
					'Có, buổi tư vấn từ xa ban đầu và xem xét báo cáo có thể diễn ra trước khi bạn khởi hành, để phác đồ của bạn được lên kế hoạch trước và chuyến đi được đồng bộ với chu kỳ kích thích.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ tiền sử hiếm muộn và mọi báo cáo xét nghiệm trước đây qua biểu mẫu liên hệ, điều phối viên hiếm muộn sẽ sắp xếp đánh giá chuyên môn và ước tính minh bạch trong 24 giờ.',
			},
		],
	},

	'organ-transplant': {
		name: 'Ghép tạng',
		shortDescription: 'Chương trình ghép gan và ghép thận với đội ngũ chăm sóc sau phẫu thuật tận tâm.',
		overview:
			'Ấn Độ thực hiện một trong những khối lượng ghép gan và ghép thận từ người hiến sống lớn nhất thế giới, được hỗ trợ bởi khoa ICU ghép tạng chuyên biệt và chương trình theo dõi sau phẫu thuật dài hạn cho bệnh nhân quốc tế.',
		procedures: ['Ghép thận', 'Ghép gan', 'Ghép tủy xương'],
		detailedProcedures: [
			{
				name: 'Ghép gan',
				description:
					'Ghép gan thay thế một lá gan bị bệnh hoặc suy yếu bằng một lá gan khỏe mạnh, được thực hiện ở bệnh nhân mắc bệnh gan giai đoạn cuối, xơ gan, một số loại ung thư gan trong giới hạn kích thước và số lượng nhất định, hoặc suy gan cấp tính. Gan thay thế có thể đến từ người hiến đã qua đời hoặc, phổ biến hơn ở Ấn Độ, từ người hiến sống cho một phần gan của họ, phần gan này sẽ tái tạo gần như đầy đủ kích thước ở cả người cho và người nhận trong vòng vài tháng. Trong ca mổ, gan bị bệnh được loại bỏ và gan hoặc đoạn gan của người hiến được nối với các mạch máu và ống mật của người nhận, một thủ thuật phức tạp thường mất tám đến mười hai giờ và đòi hỏi đội ngũ phẫu thuật ghép tạng giàu kinh nghiệm. Người nhận trải qua thời gian chăm sóc đặc biệt ngay sau mổ, sau đó là một đến hai tuần nằm viện, và bắt đầu dùng thuốc ức chế miễn dịch suốt đời để ngăn ngừa thải ghép. Các trung tâm ghép tạng của Ấn Độ có kinh nghiệm sâu rộng về ghép gan từ người hiến sống, bao gồm đánh giá kỹ lưỡng người hiến để xác nhận an toàn. Bệnh nhân quốc tế thường cần có người hiến sống tiềm năng đi cùng và nên lên kế hoạch lưu trú kéo dài nhiều tuần để hoàn tất đánh giá người cho và người nhận, phẫu thuật, và giai đoạn hồi phục quan trọng ban đầu trước khi việc về nước được coi là an toàn.',
			},
			{
				name: 'Ghép gan nhi',
				description:
					'Ghép gan nhi được thực hiện ở trẻ sơ sinh và trẻ em bị suy gan do các tình trạng như teo đường mật, rối loạn chuyển hóa di truyền hoặc suy gan cấp tính, khi gan không còn có thể hỗ trợ sự phát triển và sức khỏe của trẻ. Vì tạng từ người hiến đã qua đời có kích thước phù hợp với trẻ nhỏ rất hạn chế, ghép từ người hiến sống đặc biệt quan trọng trong các ca nhi khoa, thường là cha mẹ hoặc người thân hiến một đoạn gan nhỏ được phẫu thuật tạo hình và nối phù hợp với mạch máu và ống mật nhỏ hơn của trẻ. Ca mổ đòi hỏi đội ngũ phẫu thuật ghép tạng nhi khoa giàu kinh nghiệm về độ chính xác kỹ thuật mà giải phẫu nhỏ đòi hỏi, cùng với hỗ trợ chăm sóc đặc biệt nhi khoa sau đó để quản lý cân bằng dịch, ức chế miễn dịch và nguy cơ nhiễm trùng. Trẻ em thường nằm viện một đến hai tuần sau phẫu thuật, với theo dõi chặt chẽ chức năng gan và đưa vào dần thuốc chống thải ghép suốt đời. Các chương trình ghép tạng nhi khoa của Ấn Độ có kinh nghiệm điều trị trẻ nhỏ từ nước ngoài, phối hợp đánh giá người hiến cho các thành viên gia đình đi cùng song song với việc đánh giá của chính trẻ. Các gia đình nên lên kế hoạch lưu trú kéo dài nhiều tuần để hoàn tất đánh giá người cho và người nhận, phẫu thuật, và giai đoạn hồi phục sớm khi trẻ được theo dõi chặt chẽ về biến chứng.',
			},
			{
				name: 'Ghép thận',
				description:
					'Ghép thận được thực hiện cho bệnh nhân mắc bệnh thận giai đoạn cuối mà thận không còn có thể lọc đủ chất thải từ máu, mang lại một giải pháp thay thế cho chạy thận nhân tạo lâu dài. Thận hiến, có thể đến từ người thân sống hoặc người hiến sống được phê duyệt, hoặc trong một số trường hợp là người hiến đã qua đời, được phẫu thuật đặt vào vùng bụng dưới của người nhận và nối với các mạch máu gần đó và bàng quang; thận không còn chức năng của chính bệnh nhân thường được để nguyên tại chỗ. Ca mổ thường mất ba đến bốn giờ dưới gây mê toàn thân, thận được ghép thường bắt đầu sản xuất nước tiểu trong vòng vài giờ. Người nhận cần dùng thuốc ức chế miễn dịch suốt đời để ngăn thải ghép và được theo dõi chặt chẽ trong những tuần đầu về dấu hiệu thải ghép hoặc nhiễm trùng. Người hiến sống trải qua một thủ thuật riêng, thường là nội soi, để lấy một quả thận, hầu hết sau đó sống khỏe mạnh với quả thận còn lại. Các trung tâm ghép tạng của Ấn Độ thực hiện khối lượng lớn ghép thận từ người hiến sống, bao gồm xét nghiệm tương thích cẩn thận và đánh giá an toàn người hiến. Bệnh nhân quốc tế thường cần có người hiến đi cùng khi áp dụng và nên lên kế hoạch lưu trú nhiều tuần để đánh giá, phẫu thuật và theo dõi chức năng thận sớm trước khi về nước.',
			},
			{
				name: 'Ghép tủy xương',
				description:
					'Ghép tủy xương, còn gọi là ghép tế bào gốc, thay thế tủy xương bị bệnh hoặc tổn thương của bệnh nhân bằng các tế bào gốc tạo máu khỏe mạnh, được sử dụng để điều trị các tình trạng như bạch cầu, lymphoma, đa u tủy, thiếu máu bất sản và một số rối loạn máu di truyền. Trong ghép tự thân, tế bào gốc của chính bệnh nhân được thu thập, lưu trữ và truyền lại sau hóa trị liều cao; trong ghép đồng loại, tế bào gốc đến từ người hiến phù hợp, thường là anh chị em ruột hoặc người hiến không liên quan được xác định qua xét nghiệm mô. Trước khi ghép, bệnh nhân trải qua một phác đồ điều kiện hóa bằng hóa trị và đôi khi xạ trị để loại bỏ tủy bị bệnh và ức chế hệ miễn dịch, sau đó tế bào gốc được truyền qua tĩnh mạch và di chuyển đến tủy xương để bắt đầu sản xuất tế bào máu mới trong hai đến bốn tuần tiếp theo. Giai đoạn này đòi hỏi cách ly trong một đơn vị ghép chuyên biệt để bảo vệ chống nhiễm trùng trong khi số lượng tế bào máu hồi phục. Người nhận ghép đồng loại cũng cần thuốc để ngăn ngừa bệnh ghép chống chủ, khi tế bào miễn dịch của người hiến phản ứng chống lại mô của người nhận. Các trung tâm ghép tạng của Ấn Độ cung cấp cả ghép tủy tự thân và đồng loại với cơ sở cách ly chuyên biệt, bệnh nhân quốc tế thường lên kế hoạch lưu trú sáu đến tám tuần để hoàn tất điều kiện hóa, ghép và hồi phục ban đầu.',
			},
			{
				name: 'Ghép tim',
				description:
					'Ghép tim thay thế một trái tim bị bệnh nặng hoặc suy yếu bằng một trái tim hiến khỏe mạnh, thường được xem xét cho bệnh nhân suy tim giai đoạn nặng không đáp ứng với thuốc, thiết bị hoặc các điều trị phẫu thuật khác. Vì trái tim hiến phù hợp phải đến từ người hiến đã qua đời và phù hợp về nhóm máu và kích thước cơ thể, ứng viên được đưa vào danh sách chờ và trải qua đánh giá kỹ lưỡng để xác nhận đủ điều kiện phẫu thuật và ức chế miễn dịch lâu dài. Trong ca mổ, được thực hiện với bệnh nhân trên máy tim phổi nhân tạo, trái tim bị bệnh được loại bỏ và trái tim hiến được nối với các mạch máu lớn, thường mất bốn đến sáu giờ. Người nhận trải qua thời gian chăm sóc đặc biệt ngay sau đó và nằm viện vài tuần trong khi bác sĩ theo dõi thải ghép và nhiễm trùng, điều chỉnh thuốc chống thải ghép suốt đời. Sinh thiết định kỳ của trái tim mới được thực hiện trong những tháng đầu để kiểm tra thải ghép. Các chương trình ghép tạng của Ấn Độ quản lý toàn bộ lộ trình từ đánh giá đến chăm sóc sau ghép, mặc dù bệnh nhân quốc tế nên biết rằng tình trạng sẵn có của tim hiến và thời gian chờ thay đổi tùy theo quy trình phân bổ tại chỗ. Thời gian lưu trú kéo dài nhiều tuần đến vài tháng thường cần thiết để bao gồm thời gian chờ, phẫu thuật và hồi phục.',
			},
			{
				name: 'Ghép tim-phổi',
				description:
					'Ghép tim-phổi kết hợp thay thế cả tim và phổi trong một ca mổ duy nhất và được dành riêng cho bệnh nhân mắc bệnh nặng, tiến triển ảnh hưởng đến cả hai cơ quan cùng lúc, chẳng hạn như các tình trạng tim bẩm sinh phức tạp kèm tổn thương phổi liên quan, hoặc tăng áp phổi nặng đã gây suy tim không hồi phục. Vì cần một bộ tạng hiến phù hợp từ một người hiến đã qua đời duy nhất, đây là một thủ thuật hiếm gặp và phức tạp hơn so với ghép đơn tạng, với thời gian chờ dài hơn do nguồn tạng hiến hạn chế. Ca mổ được thực hiện với bệnh nhân trên máy tim phổi nhân tạo trong khi đội ngũ phẫu thuật loại bỏ tim và phổi bị bệnh và nối các tạng hiến với đường thở và mạch máu lớn của người nhận. Hồi phục bao gồm thời gian kéo dài trong chăm sóc đặc biệt, quản lý cẩn thận chức năng hô hấp và phổi, và theo dõi chặt chẽ thải ghép của một trong hai cơ quan, cùng với thuốc ức chế miễn dịch suốt đời. Phục hồi chức năng dần dần xây dựng lại dung tích phổi và sức bền thể chất trong nhiều tháng. Các trung tâm ghép tạng của Ấn Độ có khả năng ghép ngực kết hợp đánh giá kỹ lưỡng ứng viên trước khi đưa vào danh sách, bệnh nhân quốc tế nên dự kiến một quá trình kéo dài bao gồm đánh giá, thời gian chờ, phẫu thuật và hồi phục kéo dài nhiều tháng trước khi cân nhắc về nước.',
			},
			{
				name: 'Ghép phổi',
				description:
					'Ghép phổi thay thế một hoặc cả hai lá phổi bị bệnh bằng phổi hiến khỏe mạnh và được xem xét cho bệnh nhân mắc bệnh phổi giai đoạn cuối như bệnh phổi tắc nghẽn mãn tính, xơ phổi, xơ nang hoặc tăng áp phổi nặng, khi điều trị y tế không còn có thể duy trì chức năng hô hấp đầy đủ. Tùy vào tình trạng, có thể ghép một lá phổi hoặc cả hai lá; thủ thuật được thực hiện dưới gây mê toàn thân, thường với hỗ trợ tuần hoàn như máy tim phổi nhân tạo, trong khi đội ngũ phẫu thuật loại bỏ mô phổi bị bệnh và nối đường thở và mạch máu của phổi hiến với người nhận. Ca mổ thường mất vài giờ cho mỗi lá phổi, người nhận trải qua thời gian thở máy và chăm sóc đặc biệt sau đó trong khi chức năng phổi ổn định. Một chương trình phục hồi chức năng phổi có cấu trúc tiếp theo trong nhiều tháng sau để xây dựng lại dung tích hô hấp và sức bền, cùng với thuốc ức chế miễn dịch suốt đời và theo dõi định kỳ về thải ghép hoặc nhiễm trùng. Các trung tâm ghép tạng của Ấn Độ đánh giá ứng viên cẩn thận về mức độ phù hợp, bao gồm mức độ nặng của bệnh và tình trạng sức khỏe tổng thể cho phẫu thuật lớn. Vì nguồn phổi hiến ảnh hưởng đến thời gian chờ, bệnh nhân quốc tế nên lên kế hoạch lưu trú kéo dài, có phần thay đổi, bao gồm đánh giá, thời gian chờ, phẫu thuật và phục hồi chức năng sớm trước khi về nước.',
			},
		],
		benefits: [
			'Chương trình ghép từ người hiến sống với khối lượng lớn',
			'Khoa ICU ghép tạng chuyên biệt và phòng hồi phục cách ly',
			'Lập kế hoạch ức chế miễn dịch dài hạn và chăm sóc theo dõi',
			'Hỗ trợ pháp lý và đạo đức cho việc đánh giá người hiến trong suốt quá trình',
		],
		flagshipProcedure: 'Ghép gan từ người hiến sống',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: 'Nhiều năm (danh sách chờ)', successRate: '88–92%' },
			{ country: 'Vương quốc Anh', waitTime: '1–3 năm', successRate: '88–91%' },
			{ country: 'Đức', waitTime: '6–18 tháng', successRate: '87–90%' },
			{ country: 'Thái Lan', waitTime: 'Trung bình', successRate: '85–88%' },
			{ country: 'Ấn Độ', waitTime: '2–4 tuần', successRate: '90%+' },
		],
		inclusions: [
			'Đánh giá trước ghép cho người nhận và một người hiến, dưới dạng ngoại trú',
			'Tiền phòng: người nhận — 21 ngày (5 ngày ICU + 16 ngày phòng riêng); người hiến — 8 ngày (2 ngày ICU + 6 ngày phòng riêng)',
			'Chi phí bác sĩ phẫu thuật cho người hiến và người nhận',
			'Chi phí bác sĩ gây mê cho người hiến và người nhận',
			'Chi phí phòng mổ cho người hiến và người nhận',
			'Chi phí dịch vụ gây mê cho người hiến và người nhận',
			'Chi phí dịch vụ xét nghiệm',
			'Chi phí dịch vụ truyền máu',
			'Chi phí dịch vụ chẩn đoán hình ảnh',
			'Chi phí dịch vụ vật lý trị liệu',
			'Chi phí dịch vụ dược, bao gồm thuốc và vật tư y tế',
		],
		exclusions: [
			'Thời gian nằm viện trước phẫu thuật để cải thiện tình trạng bệnh nhân, cũng như thuốc/xét nghiệm sau khi xuất viện',
			'Đánh giá bất kỳ người hiến bổ sung nào khác',
			'Bất kỳ khoảng thời gian nằm viện hoặc ICU nào vượt quá thời hạn của gói dịch vụ',
			'Tất cả xét nghiệm, thuốc và vật tư vượt mức trần chi phí',
			'Các loại thuốc đắt tiền hoặc ít sử dụng, như Zenapax, Simulect, Valcyte, Novoseven, Thymoglobulin, Ambisome, Caspofungin và Anidulafungin',
			'Chi phí cho bất kỳ buổi tư vấn hoặc thủ thuật nào với chuyên gia không liên quan đến ghép tạng',
			'Chi phí chẩn đoán hình ảnh can thiệp, bao gồm dẫn lưu qua da, dẫn lưu mật xuyên gan qua da và chụp mạch',
			'Các thủ thuật tim mạch (siêu âm tim, chụp mạch) và chi phí liên quan đến thận học (lọc máu, CRRT)',
			'Các thủ thuật nội soi như ERCP',
			'Can thiệp lại',
		],
		faqs: [
			{
				question: 'Ghép gan tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Ca ghép gan tại Ấn Độ bắt đầu từ 25.000 USD, thấp hơn khoảng 60–70% so với Mỹ hoặc Anh. Gói dịch vụ bao gồm đánh giá trước ghép cho người nhận và một người hiến, ca can thiệp cho cả hai, thời gian nằm ICU và bệnh viện, chi phí phòng mổ, chăm sóc y tế, xét nghiệm và dịch vụ dược.',
			},
			{
				question: 'Tỷ lệ thành công của ghép gan tại Ấn Độ là bao nhiêu?',
				answer:
					'Các trung tâm ghép gan hàng đầu tại Ấn Độ báo cáo tỷ lệ thành công sau một năm hơn 90%, tương đương với các chương trình hàng đầu tại Mỹ và châu Âu. Tỷ lệ sống sau 5 năm khoảng 75%, tùy thuộc vào bệnh lý nền, tình trạng sức khỏe tổng quát của bệnh nhân và việc tuân thủ theo dõi.',
			},
			{
				question: 'Ai có thể làm người hiến gan để ghép tại Ấn Độ?',
				answer:
					'Đối với ghép gan từ người hiến sống, người hiến phải là người thân ruột thịt gần gũi (cha/mẹ, anh/chị/em, con hoặc vợ/chồng), trong độ tuổi 18–55, khỏe mạnh, có nhóm máu tương thích và chức năng gan bình thường. Việc hiến tặng phải hoàn toàn tự nguyện — bất kỳ giao dịch tài chính nào giữa người hiến và người nhận đều là bất hợp pháp theo luật Ấn Độ. Đánh giá toàn diện về người hiến thường hoàn tất trong 2–3 ngày.',
			},
			{
				question: 'Thời gian nằm viện cho ghép gan tại Ấn Độ là bao lâu?',
				answer:
					'Người nhận nằm viện khoảng 21 ngày — 5 ngày ICU và 16 ngày phòng riêng. Người hiến nằm viện khoảng 8 ngày — 2 ngày ICU và 6 ngày phòng riêng. Sau khi xuất viện, người nhận nên ở lại Ấn Độ ít nhất 1 tháng để được theo dõi cẩn thận, do đó thời gian lưu trú tổng cộng tại Ấn Độ thường khoảng 2 tháng.',
			},
			{
				question: 'Gan có thể tái tạo sau khi hiến từ người hiến sống không?',
				answer:
					'Có. Gan là cơ quan rắn duy nhất trong cơ thể người có thể tái tạo hoàn toàn. Sau khi hiến một phần, phần gan còn lại của người hiến sẽ phát triển đến khoảng 80% kích thước ban đầu trong vài tuần và gần bằng kích thước ban đầu trong vài tháng. Phần gan được ghép cho người nhận cũng sẽ phát triển đến kích thước đầy đủ.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Gửi hồ sơ y tế của người nhận và người hiến tiềm năng qua biểu mẫu liên hệ hoặc WhatsApp, đội ngũ điều phối ghép tạng của chúng tôi sẽ sắp xếp đánh giá chuyên môn miễn phí và buổi tư vấn từ xa với bác sĩ phẫu thuật ghép tạng trước khi bạn khởi hành.',
			},
		],
	},

	'dental-care': {
		name: 'Nha khoa',
		shortDescription: 'Cấy ghép, mặt dán sứ và phục hồi toàn bộ răng miệng, sử dụng công nghệ nha khoa kỹ thuật số mới nhất.',
		overview:
			'Thiết kế nụ cười kỹ thuật số, mão răng CAD/CAM trong ngày và phục hồi toàn diện bằng cấy ghép là tiêu chuẩn tại các trung tâm nha khoa hàng đầu Ấn Độ — mang lại kết quả trong vài ngày, thay vì nhiều tháng như thường thấy khi điều trị theo giai đoạn ở nước ngoài.',
		procedures: ['Cấy ghép răng', 'Mặt dán sứ', 'Phục hồi toàn bộ răng miệng'],
		detailedProcedures: [
			{
				name: 'Cấy ghép răng toàn hàm',
				description:
					'Cấy ghép răng toàn hàm thay thế toàn bộ một hàm, hoặc cả hai hàm, răng bị mất hoặc hư hỏng nặng bằng một bộ phục hình cố định được hỗ trợ bởi trụ cấy ghép. Quá trình bắt đầu bằng đánh giá chi tiết mật độ xương hàm bằng chụp CT 3D, sau đó là đặt phẫu thuật nhiều trụ cấy ghép titan vào hàm trên và/hoặc hàm dưới, đóng vai trò là chân răng nhân tạo. Trong giai đoạn lành thương, gọi là tích hợp xương, các trụ cấy ghép hợp nhất với xương xung quanh để tạo nền tảng ổn định trước khi một cầu răng hoặc phục hình toàn hàm được chế tạo riêng được gắn vào. Bệnh nhân thường cân nhắc lựa chọn này sau khi mất phần lớn hoặc toàn bộ răng tự nhiên do bệnh nướu tiến triển, sâu răng, chấn thương hoặc đeo răng giả lâu năm gây mất xương. So với răng giả tháo lắp, phục hình cấy ghép toàn hàm mang lại khả năng nhai, phát âm và nâng đỡ khuôn mặt tốt hơn, vì nó không phụ thuộc vào lực hút hay keo dán. Các đội ngũ nha khoa tại Ấn Độ thường kết hợp thiết kế nụ cười kỹ thuật số với phòng lab cấy ghép và phục hình tại chỗ để việc đặt trụ, lành thương và phục hình cuối cùng có thể được phối hợp trong một hành trình điều trị duy nhất, thường qua một đến hai lần đến cách nhau vài tháng.',
			},
			{
				name: 'Cấy ghép răng All-on-4',
				description:
					'Kỹ thuật All-on-4 phục hồi toàn bộ một hàm răng chỉ bằng bốn trụ cấy ghép được đặt chiến lược, hai trụ đặt thẳng đứng phía trước hàm và hai trụ nghiêng về phía sau để tận dụng xương đặc hơn và tránh các cấu trúc như xoang hàm hoặc ống dây thần kinh. Việc đặt nghiêng này thường cho phép gắn cầu răng tạm thời cố định vào các trụ cấy ghép ngay trong ngày phẫu thuật, giúp bệnh nhân có răng chức năng, trông tự nhiên trong khi các trụ cấy ghép tích hợp với xương trong những tháng tiếp theo. Kỹ thuật này thường được khuyến nghị cho bệnh nhân đã mất phần lớn răng hoặc cần nhổ toàn bộ một hàm, đặc biệt là những người không đủ thể tích xương cho số lượng đầy đủ trụ cấy ghép mà không cần ghép xương bổ sung. Khi lành thương hoàn tất, cầu răng tạm thời được thay bằng phục hình cuối cùng bền hơn. Vì phương pháp này dùng ít trụ cấy ghép hơn và thường tránh được ghép xương, nó có thể rút ngắn tổng thời gian điều trị so với cấy ghép toàn hàm truyền thống. Các phòng khám tại Ấn Độ thường cung cấp thủ thuật này với phần mềm lập kế hoạch kỹ thuật số để xác định chính xác góc đặt trụ, cho phép bệnh nhân quốc tế hoàn tất giai đoạn phẫu thuật và nhận cầu răng tạm chức năng trong một chuyến đi duy nhất.',
			},
			{
				name: 'Cấy ghép răng All-on-6',
				description:
					'Phương pháp All-on-6 phục hồi một hàm răng bị mất hoàn toàn bằng cách neo một cầu răng cố định vào sáu trụ cấy ghép phân bố đều dọc theo hàm, thay vì bốn trụ như phương pháp All-on-4. Các trụ cấy ghép bổ sung phân tán lực cắn qua nhiều điểm hơn, có thể mang lại độ ổn định thêm cho bệnh nhân có lực cắn cao hơn hoặc những người muốn nền tảng rộng hơn cho phục hình cố định lâu dài. Ứng viên thường là bệnh nhân có thể tích xương hàm đủ, bị mất phần lớn hoặc toàn bộ răng trong một hàm, do bệnh nha chu tiến triển, sâu răng hoặc mất răng trước đó. Phẫu thuật bao gồm đặt chính xác các trụ cấy ghép, được hướng dẫn bằng hình ảnh 3D, sau đó là giai đoạn lành thương khi xương hợp nhất quanh các trụ trước khi gắn cầu răng cuối cùng; trong nhiều trường hợp, cầu răng tạm cố định được gắn ngay sau phẫu thuật. Kỹ thuật này thường được chọn thay cho răng giả tháo lắp vì loại bỏ nhu cầu dùng keo dán và phục hồi khả năng nhai gần như bình thường. Các trung tâm cấy ghép tại Ấn Độ thường kết hợp thủ thuật này với phòng lab nha khoa tại chỗ, cho phép lập kế hoạch giai đoạn phẫu thuật và phục hình cùng nhau và hoàn tất trong một chuyến thăm kéo dài.',
			},
			{
				name: 'Cấy ghép răng tức thì (3 ngày)',
				description:
					'Cấy ghép răng tức thì, hay 3 ngày, là một quy trình trong đó việc đặt trụ cấy ghép, lắp mão hoặc cầu răng tạm thời và tái khám ban đầu được rút gọn thành một chuyến thăm ngắn, có cấu trúc thay vì trải dài qua nhiều chuyến đi riêng biệt. Vào ngày đầu tiên, các trụ cấy ghép được đặt phẫu thuật vào xương hàm, thường sử dụng lập kế hoạch kỹ thuật số có hướng dẫn để xác định vị trí lý tưởng; khi chất lượng xương cho phép, một phục hình cố định tạm thời được gắn ngay trong cùng chuyến thăm hoặc ngay sau đó, để bệnh nhân rời đi với răng chức năng, thẩm mỹ thay vì khoảng trống hoặc thiết bị tháo lắp. Những ngày tiếp theo thường được dùng để xem xét quá trình lành thương, điều chỉnh khớp cắn và tinh chỉnh phục hình tạm trước khi bệnh nhân về nước, với phục hình vĩnh viễn cuối cùng được hoàn tất sau đó, tại chỗ hoặc trong chuyến thăm tiếp theo, khi tích hợp xương hoàn tất. Phương pháp này phù hợp với bệnh nhân cần điều trị hiệu quả do hạn chế về thời gian đi lại và có mật độ xương đủ để chịu tải tức thì. Các đội ngũ cấy ghép tại Ấn Độ thường xây dựng quy trình này đặc biệt dành cho bệnh nhân quốc tế, phối hợp chụp hình, phẫu thuật và phục hình tạm trong một lịch trình gọn nhẹ trong khi lên kế hoạch tái khám khi các trụ cấy ghép đã tích hợp hoàn toàn.',
			},
			{
				name: 'Cấy ghép răng mini',
				description:
					'Cấy ghép răng mini là các trụ titan có đường kính hẹp hơn, thường dưới ba milimet, được sử dụng để neo răng thay thế hoặc ổn định răng giả ở bệnh nhân có xương hàm quá mỏng hoặc hẹp cho trụ cấy ghép thông thường. Vì kích thước nhỏ hơn, chúng thường có thể được đặt bằng kỹ thuật xâm lấn tối thiểu tránh được nhu cầu ghép xương, sử dụng lỗ dẫn nhỏ thay vì vạt phẫu thuật lớn hơn, thường rút ngắn cả thời gian thủ thuật và hồi phục. Chúng thường được dùng nhiều nhất để cố định răng giả hàm dưới hoặc hàm trên bằng khớp bi-ổ hoặc thanh gắn, chuyển đổi một thiết bị tháo lắp lỏng lẻo thành thiết bị ổn định hơn, mặc dù chúng cũng có thể hỗ trợ mão răng đơn trong trường hợp xương hạn chế. Bệnh nhân cần lựa chọn này bao gồm những người bị mất xương đáng kể không phải ứng viên cho cấy ghép tiêu chuẩn, hoặc bệnh nhân lớn tuổi muốn một cách ít xâm lấn hơn để cải thiện độ ổn định của răng giả. Thời gian lành thương nói chung ngắn hơn so với cấy ghép tiêu chuẩn, và trong nhiều trường hợp phục hình có thể được gắn ngay sau khi đặt. Các phòng khám nha khoa tại Ấn Độ thường cung cấp cấy ghép mini như một lựa chọn chi phí thấp hơn, nhanh hơn cho bệnh nhân tập trung vào ổn định răng giả thay vì tái tạo cố định toàn hàm.',
			},
			{
				name: 'Cấy ghép răng xương gò má (Zygomatic)',
				description:
					'Cấy ghép xương gò má là các trụ titan dài khác thường, thường từ 30 đến 50 milimet, được neo không phải vào xương hàm trên mà vào xương gò má (xương má), vốn đặc hơn và ít bị tiêu xương, tình trạng thường ảnh hưởng đến hàm trên sau khi mất răng lâu năm. Chúng được dùng cho bệnh nhân bị mất xương hàm trên nghiêm trọng, không phải ứng viên cho cấy ghép thông thường và nếu không sẽ cần các thủ thuật ghép xương rộng rãi trước khi có thể đặt bất kỳ trụ cấy ghép nào. Trong phẫu thuật, trụ cấy ghép được đưa vào theo một góc đi qua hàm trên và bám vào xương gò má, cung cấp một điểm neo ổn định cho phục hình cố định, trong nhiều trường hợp cho phép gắn cầu răng tạm toàn hàm ngay sau phẫu thuật. Kỹ thuật này có thể loại bỏ quá trình ghép xương và lành thương kéo dài nhiều tháng vốn cần thiết, khiến nó trở thành lựa chọn cho bệnh nhân muốn con đường nhanh hơn đến phục hình cố định bất chấp tình trạng thiếu xương đáng kể. Vì việc đặt trụ cấy ghép xương gò má đòi hỏi đào tạo phẫu thuật và hình ảnh chuyên biệt, nó thường được thực hiện bởi các bác sĩ phẫu thuật hàm mặt giàu kinh nghiệm. Các trung tâm tại Ấn Độ cung cấp thủ thuật này thường sử dụng hình ảnh chụp cắt lớp chùm tia hình nón 3D để lập kế hoạch phẫu thuật chính xác do độ phức tạp giải phẫu liên quan.',
			},
			{
				name: 'Mão răng (Crown)',
				description:
					'Mão răng là một chụp răng được chế tạo riêng, thường làm từ sứ, zirconia, kim loại hoặc kết hợp các vật liệu này, bao phủ hoàn toàn một chiếc răng bị hư hỏng hoặc yếu để phục hồi hình dạng, độ bền và vẻ ngoài của nó. Mão răng được khuyến nghị khi một chiếc răng bị suy yếu đáng kể do miếng trám lớn, nứt, mòn, hoặc đã điều trị tủy, vì thủ thuật thường loại bỏ đủ cấu trúc răng khiến phần răng còn lại cần thêm hỗ trợ để chịu được lực cắn bình thường. Việc đặt mão thường bao gồm mài răng để tạo khoảng trống cho mão, lấy dấu kỹ thuật số hoặc vật lý, và lắp mão tạm trong khi mão vĩnh viễn được chế tạo, thường tại phòng lab nha khoa, trước khi được gắn cố định tại lần tái khám. Hệ thống mão răng trong ngày sử dụng công nghệ phay tại phòng khám có thể rút ngắn đáng kể quá trình này bằng cách thiết kế và sản xuất mão ngay tại ghế nha khoa. Mão răng cũng được dùng để chụp lên trụ cấy ghép và neo cầu răng thay thế răng bị mất. Các phòng khám nha khoa tại Ấn Độ thường cung cấp nhiều lựa chọn vật liệu mão với tính thẩm mỹ và độ bền khác nhau, nhiều nơi sử dụng quét kỹ thuật số và phay tại chỗ để giảm số lần tái khám cần thiết.',
			},
			{
				name: 'Răng giả và cầu răng',
				description:
					'Răng giả và cầu răng là hai phương pháp truyền thống để thay thế răng mất mà không cần phẫu thuật. Răng giả là một thiết bị tháo lắp, bán phần hoặc toàn phần, làm từ nền acrylic hoặc dẻo với răng nhân tạo, được thiết kế để tựa trên nướu và, ở hàm trên, một phần vòm miệng; nó được giữ cố định bằng lực hút, móc cài hoặc keo dán và có thể tháo ra để vệ sinh. Ngược lại, cầu răng là phục hình cố định thay thế một hoặc nhiều răng mất bằng cách neo răng nhân tạo vào răng tự nhiên hoặc trụ cấy ghép ở hai bên khoảng trống, thường dùng mão răng gắn cố định trên các răng trụ. Bệnh nhân chọn các lựa chọn này dựa trên số lượng răng mất, tình trạng răng còn lại, sức khỏe xương và ngân sách, vì cả hai đều ít xâm lấn hơn và phải chăng hơn so với các lựa chọn dựa trên cấy ghép. Việc lắp bao gồm lấy dấu hoặc quét kỹ thuật số, chế tạo tại phòng lab và các lần tái khám điều chỉnh để đảm bảo thoải mái và khớp cắn tự nhiên. Các phòng lab nha khoa của Ấn Độ thường sử dụng công nghệ CAD/CAM để chế tạo răng giả và cầu răng chính xác, vừa khít, nhiều phòng khám có thể hoàn tất thiết kế, chế tạo và lắp đặt trong một chuyến thăm kéo dài duy nhất cho bệnh nhân quốc tế.',
			},
			{
				name: 'Điều trị tủy răng',
				description:
					'Điều trị tủy răng, hay nội nha, loại bỏ mô tủy bị nhiễm trùng hoặc viêm bên trong răng để giảm đau và cứu một chiếc răng có thể phải nhổ nếu không điều trị. Thủ thuật thường cần thiết khi sâu răng sâu, răng nứt hoặc các thủ thuật nha khoa lặp lại cho phép vi khuẩn xâm nhập buồng tủy và ống tủy, gây nhiễm trùng, sưng hoặc đau dai dẳng, đặc biệt khi gặp nóng, lạnh hoặc áp lực. Dưới gây tê tại chỗ, nha sĩ tạo một lỗ nhỏ trên răng, loại bỏ tủy bị hỏng, làm sạch và tạo hình ống tủy trước khi trám đầy bằng vật liệu tương thích sinh học để ngăn nhiễm trùng thêm. Vì răng đã điều trị trở nên giòn hơn khi không còn nguồn máu, nó thường được chụp mão sau đó, đặc biệt với răng hàm chịu lực nhai lớn. Điều trị tủy hiện đại thường hoàn tất trong một hoặc hai lần hẹn bằng dụng cụ quay và, ở nhiều phòng khám, kính hiển vi phẫu thuật để tăng độ chính xác, và hầu hết bệnh nhân cảm thấy giảm đau đáng kể so với trước điều trị thay vì khó chịu thêm. Các trung tâm nha khoa tại Ấn Độ thường sử dụng X-quang kỹ thuật số và máy định vị chóp để lập bản đồ chính xác giải phẫu ống tủy, giúp đảm bảo làm sạch kỹ lưỡng và kết quả trám bít tốt.',
			},
			{
				name: 'Mặt dán sứ (Veneers)',
				description:
					'Mặt dán sứ là các lớp vỏ mỏng, thường làm bằng sứ hoặc nhựa composite, được dán vào mặt trước của răng để cải thiện vẻ ngoài bằng cách thay đổi màu sắc, hình dạng, kích thước hoặc sự sắp xếp. Chúng thường được dùng để giải quyết tình trạng ố màu không đáp ứng với tẩy trắng, sứt mẻ, khoảng cách giữa các răng, hoặc răng hơi lệch hình hay không đều, mang lại cách cải thiện nụ cười mà không cần di chuyển răng rộng rãi như chỉnh nha. Đối với mặt dán sứ, một lớp men mỏng thường được loại bỏ khỏi bề mặt răng để mặt dán nằm khít, lấy dấu, và các lớp vỏ tùy chỉnh được chế tạo tại phòng lab trước khi được gắn cố định ở lần hẹn thứ hai; mặt dán composite thường có thể được tạo hình trực tiếp trên răng trong một buổi. Vì việc đặt mặt dán sứ loại bỏ một phần men răng tự nhiên, nó thường được coi là thay đổi thẩm mỹ vĩnh viễn cần bảo trì lâu dài. Mặt dán bền nhưng không phải bất khả xâm phạm, bệnh nhân thường được khuyên tránh cắn trực tiếp thức ăn rất cứng bằng răng có mặt dán. Các phòng khám nha khoa thẩm mỹ tại Ấn Độ thường sử dụng phần mềm thiết kế nụ cười kỹ thuật số để xem trước kết quả và phối màu, hình dạng mặt dán phù hợp với đặc điểm khuôn mặt bệnh nhân trước khi bắt đầu điều trị.',
			},
			{
				name: 'Thiết kế nụ cười Hollywood',
				description:
					'Thiết kế nụ cười Hollywood là một phương pháp nha khoa thẩm mỹ toàn diện kết hợp nhiều thủ thuật, thường nhất là mặt dán sứ hoặc mão răng, tẩy trắng răng và đôi khi tạo hình nướu, để tạo ra một nụ cười trắng đều và cân đối. Thay vì điều trị một chiếc răng hay một vấn đề đơn lẻ, quá trình bắt đầu bằng đánh giá toàn diện màu sắc, hình dạng, sự sắp xếp răng và đường viền nướu, thường được hỗ trợ bởi phần mềm thiết kế nụ cười kỹ thuật số cho phép bệnh nhân xem trước kết quả dự kiến trước khi chạm vào bất kỳ chiếc răng nào. Ứng viên thường là bệnh nhân muốn thay đổi thẩm mỹ đáng kể vì lý do như răng không đều, ố màu, khoảng cách hoặc đường viền nướu không đều, thay vì những người có một vấn đề nha khoa đơn lẻ. Điều trị thường bao gồm mài răng tối thiểu, chế tạo tại phòng lab các mặt dán hoặc mão tùy chỉnh phù hợp với màu sắc và hình dạng đã chọn, và các cuộc hẹn lắp theo từng giai đoạn để đạt kết quả tự nhiên nhưng được nâng cao. Vì đây là thủ thuật thẩm mỹ chứ không phải cần thiết về y tế, các buổi thảo luận lập kế hoạch tập trung nhiều vào kỳ vọng và tỷ lệ khuôn mặt của bệnh nhân. Các trung tâm nha khoa thẩm mỹ tại Ấn Độ thường đóng gói điều trị này cho bệnh nhân quốc tế, phối hợp lập kế hoạch kỹ thuật số, công việc phòng lab và các cuộc hẹn lắp để toàn bộ quá trình chuyển đổi có thể hoàn tất trong một chuyến thăm kéo dài duy nhất.',
			},
			{
				name: 'Invisalign — Khay chỉnh nha trong suốt',
				description:
					'Invisalign sử dụng một chuỗi khay nhựa trong suốt, tháo lắp được, chế tạo riêng để dần dần di chuyển răng vào vị trí thẳng hơn, mang lại giải pháp thay thế cho niềng răng kim loại truyền thống trong điều trị khấp khểnh, khoảng cách và một số bất thường khớp cắn. Điều trị bắt đầu bằng quét kỹ thuật số hoặc lấy dấu răng, được dùng để tạo kế hoạch điều trị 3D cho thấy chuyển động dự kiến của từng răng qua một chuỗi các giai đoạn khay; một khay mới được đeo khoảng mỗi một đến hai tuần, mỗi khay dịch chuyển răng gần hơn đến vị trí cuối cùng. Vì các khay trong suốt và có thể tháo ra khi ăn uống và vệ sinh, chúng thường được chọn bởi bệnh nhân người lớn hoặc những người muốn lựa chọn kín đáo hơn niềng răng cố định. Các điểm gắn nhỏ màu răng có thể được dán vào một số răng để giúp khay bám chắc và tác dụng lực chính xác hơn khi cần. Thời gian điều trị thay đổi tùy độ phức tạp của ca, từ vài tháng cho các chỉnh sửa nhỏ đến hơn một năm cho các trường hợp lệch lạc phức tạp hơn, cần các lần tái khám định kỳ để theo dõi tiến trình và cấp khay mới. Các phòng khám chỉnh nha tại Ấn Độ thường sử dụng quét 3D và phần mềm lập kế hoạch điều trị tại chỗ để thiết kế và theo dõi các ca Invisalign cho cả bệnh nhân địa phương và bệnh nhân đến thăm.',
			},
			{
				name: 'Snap-On Smile',
				description:
					'Snap-On Smile là một thiết bị nha khoa tháo lắp, không xâm lấn, làm từ nhựa nha khoa dẻo, vừa khít trực tiếp lên răng hiện có của bệnh nhân để cải thiện ngay vẻ ngoài nụ cười mà không cần khoan, mài hay gây mê. Nó được chế tạo riêng từ dấu răng của bệnh nhân để gắn chắc chắn lên răng tự nhiên, che phủ ố màu, sứt mẻ, khoảng cách hoặc lệch lạc, và có thể được bệnh nhân tự tháo và lắp lại tùy ý để vệ sinh hoặc ăn uống. Vì không có cấu trúc răng nào bị thay đổi, nó thường được chọn bởi bệnh nhân muốn một giải pháp thẩm mỹ có thể đảo ngược, một lựa chọn tạm thời trong khi cân nhắc các điều trị vĩnh viễn hơn như mặt dán sứ hoặc cấy ghép, hoặc một cách phải chăng để cải thiện vẻ ngoài nụ cười mà không cần phẫu thuật. Nó không phải là thay thế cho điều trị phục hồi trong các trường hợp sâu răng đang hoạt động, bệnh nướu hoặc mất răng cần thay thế chức năng, và nói chung không dành cho việc nhai thường xuyên thức ăn rất cứng. Việc lắp thường cần hai lần hẹn: một để lấy dấu và chọn màu, và lần thứ hai để lắp và điều chỉnh khi thiết bị đã được chế tạo. Các phòng khám nha khoa tại Ấn Độ thường cung cấp đây như một lựa chọn thẩm mỹ nhanh cho bệnh nhân muốn cải thiện nụ cười trong cùng chuyến đi mà không cần cam kết thay đổi răng vĩnh viễn.',
			},
			{
				name: 'Tẩy trắng răng',
				description:
					'Tẩy trắng răng là một thủ thuật thẩm mỹ làm sáng màu răng bằng cách phá vỡ các hợp chất gây ố trong men răng và ngà răng bên dưới, thường sử dụng gel chứa peroxide. Tẩy trắng tại phòng khám bao gồm việc nha sĩ bôi gel nồng độ cao hơn lên răng, đôi khi được kích hoạt bằng đèn đặc biệt, trong điều kiện kiểm soát bảo vệ nướu, tạo ra thay đổi rõ rệt chỉ trong một lần hẹn kéo dài khoảng một giờ. Bộ tẩy trắng mang về nhà sử dụng khay vừa riêng và gel nồng độ thấp hơn đeo trong khoảng thời gian nhất định hàng ngày trong một đến hai tuần, mang lại kết quả dần dần hơn mà bệnh nhân có thể tự quản lý theo tốc độ của mình. Bệnh nhân thường tìm đến tẩy trắng để giải quyết ố màu từ cà phê, trà, thuốc lá, tuổi tác hoặc một số loại thuốc, mặc dù kết quả thay đổi tùy nguyên nhân và mức độ ố màu ban đầu, và tẩy trắng không làm thay đổi màu của mão răng, mặt dán hay miếng trám, có thể tạo ra sự không khớp màu nếu không được lên kế hoạch trước. Ê buốt răng nhẹ trong hoặc sau điều trị là phổ biến và thường tạm thời. Các phòng khám nha khoa tại Ấn Độ thường kết hợp tẩy trắng tại phòng khám với bộ duy trì mang về nhà để bệnh nhân quốc tế có thể đạt kết quả ngay trước khi về nước và duy trì sau đó.',
			},
			{
				name: 'Chỉnh nha',
				description:
					'Chỉnh nha là chuyên khoa nha khoa tập trung chẩn đoán và điều chỉnh răng và hàm lệch lạc, sử dụng các khí cụ như niềng răng kim loại hoặc sứ truyền thống, khay trong suốt hoặc thiết bị chức năng để dần dần di chuyển răng hoặc hướng dẫn sự phát triển của hàm vào vị trí cân đối hơn. Điều trị thường được khuyến nghị cho tình trạng khấp khểnh, khoảng cách, khớp cắn sâu, khớp cắn ngược, khớp cắn chéo hoặc lệch hàm ảnh hưởng đến việc nhai, phát âm, vệ sinh răng miệng hoặc sức khỏe răng miệng lâu dài, và có thể thực hiện ở hầu như mọi lứa tuổi, mặc dù đánh giá sớm từ thời thơ ấu đôi khi có thể đơn giản hóa điều trị sau này. Quá trình thường bắt đầu bằng khám lâm sàng, chụp X-quang và lấy dấu kỹ thuật số hoặc vật lý để lập kế hoạch di chuyển răng, sau đó là lắp niềng răng hoặc khay và các lần tái khám điều chỉnh định kỳ, thường mỗi bốn đến tám tuần, trong giai đoạn điều trị có thể kéo dài từ vài tháng đến vài năm tùy độ phức tạp. Trong một số trường hợp liên quan đến sự khác biệt hàm đáng kể, điều trị chỉnh nha được kết hợp với phẫu thuật chỉnh hàm để có kết quả hoàn chỉnh hơn. Sau điều trị tích cực, thường cần đeo hàm duy trì để giữ vị trí răng mới. Các trung tâm chỉnh nha tại Ấn Độ thường cung cấp đầy đủ các lựa chọn từ niềng răng truyền thống đến hệ thống khay trong suốt, với công cụ lập kế hoạch kỹ thuật số được sử dụng để vạch ra điều trị trước khi bắt đầu.',
			},
			{
				name: 'Nha chu',
				description:
					'Nha chu là chuyên khoa nha khoa liên quan đến các cấu trúc hỗ trợ răng, cụ thể là nướu, dây chằng nha chu và xương xung quanh, tập trung vào phòng ngừa, chẩn đoán và điều trị bệnh nướu từ viêm nướu nhẹ đến viêm nha chu tiến triển. Điều trị thường bắt đầu bằng các phương pháp không phẫu thuật như làm sạch sâu, gọi là cạo vôi và làm nhẵn chân răng, loại bỏ mảng bám và cao răng dưới đường viền nướu để giảm viêm và nhiễm trùng. Khi bệnh đã tiến triển nặng hơn, gây tụt nướu, mất xương hoặc túi sâu quanh răng, các lựa chọn phẫu thuật như phẫu thuật vạt nướu, ghép xương hoặc ghép nướu có thể được sử dụng để loại bỏ mô nhiễm trùng, tái tạo xương đã mất hoặc che phủ chân răng lộ. Bệnh nhân thường cần chăm sóc nha chu khi nhận thấy chảy máu nướu, hôi miệng dai dẳng, tụt nướu hoặc răng lung lay, tất cả đều có thể chỉ ra nhiễm trùng tiềm ẩn mà nếu không điều trị có thể dẫn đến mất răng. Các bác sĩ nha chu cũng đóng vai trò quan trọng trong việc chuẩn bị nướu và xương trước khi đặt trụ cấy ghép răng. Các trung tâm nha khoa tại Ấn Độ thường tích hợp đánh giá nha chu vào lập kế hoạch điều trị cấy ghép và thẩm mỹ, vì mô nướu và xương khỏe mạnh là yếu tố thiết yếu cho sự thành công lâu dài của hầu hết các thủ thuật phục hồi.',
			},
			{
				name: 'Nha khoa an thần',
				description:
					'Nha khoa an thần sử dụng thuốc để giúp bệnh nhân thư giãn trong các thủ thuật nha khoa, từ các lựa chọn giảm lo âu nhẹ đến mức an thần sâu hơn, và thường được cung cấp cho bệnh nhân có lo âu nha khoa đáng kể, phản xạ nôn mạnh, nhạy cảm với đau, hoặc những người trải qua các thủ thuật kéo dài hoặc phức tạp như nhổ nhiều răng hoặc phẫu thuật cấy ghép toàn hàm. Các lựa chọn phổ biến bao gồm khí cười (nitơ oxit), hít vào và hết tác dụng nhanh, thuốc an thần uống dùng trước cuộc hẹn để có trạng thái bình tĩnh, buồn ngủ, và an thần tĩnh mạch, được thực hiện bởi chuyên gia được đào tạo và cho phép thư giãn sâu hơn trong khi bệnh nhân vẫn tự thở và phản ứng với hướng dẫn. Đối với các thủ thuật phẫu thuật rộng hơn, gây mê toàn thân đôi khi có thể được sử dụng dưới sự giám sát của bác sĩ gây mê. Trong suốt quá trình an thần, các dấu hiệu sinh tồn như nhịp tim, huyết áp và nồng độ oxy thường được theo dõi để đảm bảo an toàn cho bệnh nhân. Lựa chọn mức độ an thần phụ thuộc vào độ phức tạp của thủ thuật, mức độ lo âu của bệnh nhân và tiền sử sức khỏe tổng thể. Các phòng khám nha khoa tại Ấn Độ cung cấp các lựa chọn an thần cho các thủ thuật phức tạp như cấy ghép toàn hàm thường có hỗ trợ gây mê đủ trình độ tại chỗ, cho phép bệnh nhân quốc tế hoàn tất các buổi điều trị kéo dài một cách thoải mái trong một chuyến thăm duy nhất.',
			},
		],
		benefits: [
			'Thiết kế nụ cười kỹ thuật số và mão răng CAD/CAM trong ngày',
			'Phục hồi toàn diện bằng cấy ghép hoàn tất chỉ trong một chuyến đi',
			'Vật liệu cấy ghép đẳng cấp quốc tế được sử dụng cho mọi trường hợp',
			'Kết hợp điều trị với thời gian hồi phục gần phòng khám',
		],
		flagshipProcedure: 'Cấy ghép toàn hàm răng',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '2–4 tuần', successRate: '95–97%' },
			{ country: 'Vương quốc Anh', waitTime: '3–6 tuần', successRate: '95–97%' },
			{ country: 'Đức', waitTime: '2–4 tuần', successRate: '94–96%' },
			{ country: 'Thái Lan', waitTime: '1–2 tuần', successRate: '93–95%' },
			{ country: 'Ấn Độ', waitTime: '3–5 ngày', successRate: '95%+' },
		],
		inclusions: [
			'Tư vấn thiết kế nụ cười kỹ thuật số và quét 3D',
			'Chi phí nha sĩ cho việc đặt cấy ghép hoặc phục hồi',
			'Trụ cấy ghép và trụ nối chất lượng tiêu chuẩn',
			'Chế tác mão răng CAD/CAM trong ngày, khi phù hợp',
			'Gây tê tại chỗ và chi phí thủ thuật vô trùng',
			'Một buổi tái khám để kiểm tra quá trình lành thương và độ khít',
		],
		exclusions: [
			'Ghép xương hoặc nâng xoang, nếu không được xác định trong lần quét ban đầu',
			'Nâng cấp cấy ghép cao cấp ngoài trụ tiêu chuẩn',
			'Mão răng, mặt dán sứ hoặc phục hồi bổ sung ngoài kế hoạch điều trị đã thống nhất',
			'Điều trị chỉnh nha hoặc căn chỉnh răng trước khi đặt cấy ghép',
			'Buổi tái khám ngoài buổi đã bao gồm',
		],
		faqs: [
			{
				question: 'Cấy ghép răng tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Một trụ cấy ghép răng đơn tại Ấn Độ bắt đầu từ 800 USD, thấp hơn khoảng 80% so với Mỹ, bao gồm tư vấn, đặt cấy ghép và mão răng CAD/CAM trong ngày, khi phù hợp.',
			},
			{
				question: 'Phục hồi toàn bộ răng miệng có thể hoàn tất trong một chuyến đi không?',
				answer:
					'Có, sử dụng thiết kế nụ cười kỹ thuật số và công nghệ mão răng trong ngày, hầu hết các trường hợp cấy ghép toàn hàm có thể hoàn tất trong một chuyến đi 7–10 ngày, so với nhiều tháng thường cần khi điều trị theo giai đoạn ở nước ngoài.',
			},
			{
				question: 'Những thương hiệu cấy ghép nào được sử dụng?',
				answer:
					'Các trung tâm nha khoa đối tác của chúng tôi sử dụng tiêu chuẩn là các thương hiệu cấy ghép được chứng nhận quốc tế, với nâng cấp lên thương hiệu cao cấp theo yêu cầu.',
			},
			{
				question: 'Thủ thuật có đau không?',
				answer:
					'Việc đặt cấy ghép được thực hiện dưới gây tê tại chỗ và thường được dung nạp tốt, hầu hết bệnh nhân trở lại hoạt động bình thường sau một hoặc hai ngày.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết các trường hợp cấy ghép và phục hồi cần khoảng 7–10 ngày tại Ấn Độ để đặt cấy ghép, thực hiện mão răng trong ngày và tái khám trước khi về nước.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ phim X-quang nha khoa gần đây hoặc hình ảnh răng của bạn qua biểu mẫu liên hệ, điều phối viên nha khoa của chúng tôi sẽ sắp xếp xem xét và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	'eye-care': {
		name: 'Nhãn khoa',
		shortDescription: 'Phẫu thuật đục thủy tinh thể và chỉnh thị lực, xuất viện trong ngày ở hầu hết các trường hợp.',
		overview:
			'Các bệnh viện nhãn khoa tại Ấn Độ thực hiện các thủ thuật đục thủy tinh thể và khúc xạ với khối lượng cực lớn, mang đến cho các bác sĩ phẫu thuật kinh nghiệm sâu rộng về kỹ thuật không dùng dao, hỗ trợ laser, xuất viện trong ngày cho hầu hết bệnh nhân.',
		procedures: ['Phẫu thuật đục thủy tinh thể', 'LASIK', 'Điều trị võng mạc'],
		benefits: [
			'Phẫu thuật đục thủy tinh thể không dùng dao, hỗ trợ laser',
			'Xuất viện trong ngày cho hầu hết các thủ thuật',
			'Trung tâm khối lượng lớn với kinh nghiệm phẫu thuật sâu rộng',
			'Có tùy chọn thủy tinh thể nhân tạo cao cấp',
		],
		flagshipProcedure: 'Phẫu thuật đục thủy tinh thể (phaco)',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '2–4 tuần', successRate: '98–99%' },
			{ country: 'Vương quốc Anh', waitTime: '8–18 tuần (NHS)', successRate: '98–99%' },
			{ country: 'Đức', waitTime: '2–4 tuần', successRate: '97–99%' },
			{ country: 'Thái Lan', waitTime: '1–2 tuần', successRate: '97–98%' },
			{ country: 'Ấn Độ', waitTime: '2–4 ngày', successRate: '98%+' },
		],
		inclusions: [
			'Đánh giá mắt trước phẫu thuật, bao gồm đo sinh trắc và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ phẫu thuật cho ca phẫu thuật đục thủy tinh thể không dùng dao, hỗ trợ laser',
			'Thủy tinh thể nhân tạo (IOL) đơn tiêu chuẩn',
			'Chi phí phòng mổ và thủ thuật vô trùng',
			'Xuất viện trong ngày kèm thuốc nhỏ mắt sau phẫu thuật',
			'Một buổi tái khám để xác nhận quá trình lành thương và chỉnh thị lực',
		],
		exclusions: [
			'Nâng cấp IOL cao cấp (thủy tinh thể đa tiêu hoặc trụ) ngoài loại đơn tiêu chuẩn',
			'Điều trị các bệnh lý mắt không liên quan, như tăng nhãn áp hoặc bệnh võng mạc, được phát hiện khi đánh giá',
			'Phẫu thuật mắt còn lại, nếu không được báo giá cùng nhau',
			'Buổi tái khám ngoài buổi đã bao gồm',
			'Kính hoặc kính áp tròng sau thủ thuật',
		],
		faqs: [
			{
				question: 'Phẫu thuật đục thủy tinh thể tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Phẫu thuật đục thủy tinh thể tại Ấn Độ bắt đầu từ 700 USD mỗi mắt, thấp hơn khoảng 80% so với Mỹ, bao gồm đánh giá trước phẫu thuật, phẫu thuật hỗ trợ laser, một IOL tiêu chuẩn và buổi tái khám.',
			},
			{
				question: 'Ca can thiệp có không đau và nhanh chóng không?',
				answer:
					'Có, phẫu thuật đục thủy tinh thể hiện đại không dùng dao, hỗ trợ laser thường mất 15–20 phút mỗi mắt, dưới gây tê tại chỗ, hầu hết bệnh nhân được xuất viện trong ngày.',
			},
			{
				question: 'Tôi có thể chọn thủy tinh thể cao cấp (đa tiêu hoặc trụ) không?',
				answer:
					'Có, các tùy chọn thủy tinh thể nhân tạo cao cấp có sẵn cho bệnh nhân muốn giảm phụ thuộc vào kính sau thủ thuật — những loại này được báo giá riêng so với thủy tinh thể đơn tiêu chuẩn.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết bệnh nhân đục thủy tinh thể dự kiến khoảng 4–7 ngày tại Ấn Độ cho đánh giá trước phẫu thuật, ca can thiệp và một buổi tái khám trước khi về nước; LASIK có lịch trình ngắn tương tự.',
			},
			{
				question: 'LASIK có thể thực hiện cho cả hai mắt trong một lần đến không?',
				answer:
					'Có, LASIK và các thủ thuật khúc xạ khác thường được thực hiện cho cả hai mắt trong một lần đến, trong ngày, cho các ứng viên phù hợp, sau khi đánh giá trước phẫu thuật chi tiết.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ đơn kính mắt gần đây hoặc báo cáo hiện có của bạn qua biểu mẫu liên hệ, điều phối viên nhãn khoa của chúng tôi sẽ sắp xếp đánh giá chuyên môn và báo giá minh bạch trong 24 giờ.',
			},
		],
	},

	neurology: {
		name: 'Thần kinh học và phẫu thuật thần kinh',
		shortDescription: 'Chuyên gia về não, cột sống và dây thần kinh, điều trị khối u, đột quỵ và các rối loạn thần kinh phức tạp.',
		overview:
			'Các trung tâm phẫu thuật thần kinh tại Ấn Độ kết hợp kỹ thuật vi phẫu và định vị hình ảnh với khoa ICU thần kinh chuyên biệt, mang đến cho bệnh nhân quốc tế cơ hội tiếp cận chăm sóc tiên tiến cho khối u não và đột quỵ, không cần chờ đợi chuyên gia lâu như thường thấy ở các nước khác.',
		procedures: ['Phẫu thuật khối u não', 'Phẫu thuật động kinh', 'Chăm sóc đột quỵ'],
		benefits: [
			'Bác sĩ phẫu thuật thần kinh được đào tạo về kỹ thuật vi phẫu và xâm lấn tối thiểu',
			'MRI trong mổ và định vị thần kinh có sẵn tại các trung tâm hàng đầu',
			'Khoa ICU thần kinh chuyên biệt với theo dõi tình trạng nguy kịch liên tục',
			'Hỗ trợ phục hồi thần kinh bài bản sau can thiệp',
		],
		flagshipProcedure: 'Cắt bỏ khối u não',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '85–90%' },
			{ country: 'Vương quốc Anh', waitTime: '3–9 tháng (NHS)', successRate: '85–90%' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '84–89%' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '82–87%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '85%+' },
		],
		inclusions: [
			'Đánh giá thần kinh trước phẫu thuật, phân tích MRI/CT và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ phẫu thuật thần kinh và gây mê cho thủ thuật chính',
			'Chi phí phòng mổ, bao gồm định vị thần kinh khi phù hợp',
			'Thời gian nằm ICU thần kinh (4 ngày) cộng 8 ngày phòng hồi phục trung gian',
			'Chăm sóc y tế và theo dõi thần kinh tiêu chuẩn trong thời gian nằm viện',
			'Chi phí xét nghiệm và chẩn đoán hình ảnh liên quan đến thủ thuật',
			'Tóm tắt xuất viện với kế hoạch phục hồi thần kinh bài bản',
		],
		exclusions: [
			'Thời gian nằm viện trước khi nhập viện để ổn định bệnh nhân trước khi phê duyệt can thiệp',
			'Thời gian nằm viện hoặc ICU vượt quá thời hạn của gói dịch vụ',
			'Xạ trị hoặc hóa trị cho khối u ác tính, được báo giá riêng',
			'Các buổi phục hồi thần kinh ngoại trú sau khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật khối u não tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Cắt bỏ khối u não tại Ấn Độ bắt đầu từ 9.000 USD, thấp hơn khoảng 90% so với Mỹ, bao gồm đánh giá trước phẫu thuật, ca can thiệp, thời gian nằm ICU thần kinh và kế hoạch phục hồi bài bản.',
			},
			{
				question: 'Có các kỹ thuật phẫu thuật thần kinh xâm lấn tối thiểu không?',
				answer:
					'Có, nhiều bệnh viện đối tác của chúng tôi cung cấp phương pháp định vị hình ảnh và xâm lấn tối thiểu, bao gồm MRI trong mổ và định vị thần kinh, có thể cải thiện độ chính xác và giảm thời gian hồi phục cho các trường hợp đủ điều kiện.',
			},
			{
				question: 'Thời gian nằm viện cho phẫu thuật thần kinh là bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 12 ngày — 4 ngày ICU thần kinh và 8 ngày phòng hồi phục trung gian — với thời gian lưu trú tổng cộng khuyến nghị tại Ấn Độ khoảng 3–4 tuần để theo dõi.',
			},
			{
				question: 'Có cần xạ trị hoặc hóa trị sau can thiệp không?',
				answer:
					'Đối với khối u ác tính, đội ngũ thần kinh-ung bướu của bạn có thể đề xuất xạ trị hoặc hóa trị sau can thiệp — những phương pháp này được báo giá riêng, tùy theo phác đồ cụ thể của bạn, và được thảo luận như một phần của kế hoạch điều trị.',
			},
			{
				question: 'Tôi có thể xin ý kiến thứ hai trước khi đi không?',
				answer:
					'Có, hãy gửi phim chụp MRI/CT và báo cáo của bạn để được đánh giá chuyên môn miễn phí — hội đồng phẫu thuật thần kinh của chúng tôi sẽ xác nhận liệu can thiệp có được khuyến nghị hay không, trước khi bạn cam kết lên đường.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo thần kinh và hình ảnh chẩn đoán của bạn qua biểu mẫu liên hệ hoặc WhatsApp, điều phối viên sẽ sắp xếp đánh giá chuyên môn và ước tính minh bạch trong 48 giờ.',
			},
		],
	},

	'spine-surgery': {
		name: 'Phẫu thuật cột sống',
		shortDescription: 'Hàn cột sống, thay đĩa đệm và chỉnh vẹo cột sống, với các chương trình phục hồi bài bản.',
		overview:
			'Các trung tâm phẫu thuật cột sống tại Ấn Độ kết hợp bác sĩ phẫu thuật cột sống được đào tạo chuyên sâu với các kỹ thuật xâm lấn tối thiểu và bảo tồn vận động, giúp bệnh nhân bị đau lưng mãn tính, bệnh đĩa đệm và biến dạng cột sống tránh phải chờ đợi lâu như thường thấy ở phương Tây.',
		procedures: ['Hàn cột sống', 'Thay đĩa đệm', 'Chỉnh vẹo cột sống'],
		benefits: [
			'Bác sĩ phẫu thuật cột sống được đào tạo chuyên sâu, sử dụng kỹ thuật xâm lấn tối thiểu',
			'Tùy chọn thay đĩa đệm bảo tồn vận động, tại các trung tâm chọn lọc',
			'Vật lý trị liệu bài bản tại bệnh viện ngay từ ngày đầu',
			'Thời gian nằm viện điển hình 5–7 ngày cho phẫu thuật cột sống lớn',
		],
		flagshipProcedure: 'Hàn cột sống thắt lưng',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '4–8 tuần', successRate: '88–92%' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '88–92%' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '87–91%' },
			{ country: 'Thái Lan', waitTime: '2–4 tuần', successRate: '85–89%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '90%+' },
		],
		inclusions: [
			'Đánh giá cột sống trước phẫu thuật, bao gồm phân tích MRI/X-quang',
			'Chi phí bác sĩ phẫu thuật và gây mê cho thủ thuật cột sống',
			'Chi phí phòng mổ và vật liệu cấy ghép/dụng cụ cột sống tiêu chuẩn',
			'Thời gian nằm ICU (1 ngày) cộng 5 ngày phòng riêng',
			'Các buổi vật lý trị liệu bài bản tại bệnh viện',
			'Xét nghiệm, chẩn đoán hình ảnh và thuốc sau phẫu thuật tiêu chuẩn trong thời gian lưu trú',
			'Tóm tắt xuất viện kèm chương trình bài tập tại nhà và kế hoạch phục hồi',
		],
		exclusions: [
			'Vật liệu cấy ghép cột sống cao cấp hoặc theo yêu cầu riêng ngoài dụng cụ tiêu chuẩn',
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Hàn nhiều tầng đốt sống, vượt quá các tầng được báo giá trong đánh giá ban đầu',
			'Các buổi vật lý trị liệu ngoại trú sau khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Phẫu thuật chỉnh sửa do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Hàn cột sống tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói hàn cột sống thắt lưng tại Ấn Độ bắt đầu từ 6.500 USD, thấp hơn khoảng 90% so với mức giá thông thường tại Mỹ, bao gồm chi phí bác sĩ phẫu thuật, vật liệu cấy ghép, thời gian nằm viện và vật lý trị liệu tại bệnh viện.',
			},
			{
				question: 'Có phẫu thuật cột sống xâm lấn tối thiểu không?',
				answer:
					'Có, một số bệnh viện đối tác của chúng tôi cung cấp các kỹ thuật xâm lấn tối thiểu và bảo tồn vận động, như thay đĩa đệm, có thể giảm mất máu và rút ngắn thời gian hồi phục cho các ứng viên phù hợp.',
			},
			{
				question: 'Thời gian nằm viện và hồi phục kéo dài bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 6 ngày và nên ở lại Ấn Độ 2–3 tuần để đội ngũ cột sống có thể theo dõi quá trình hồi phục ban đầu trước khi về nước.',
			},
			{
				question: 'Loại vật liệu cấy ghép/dụng cụ nào được sử dụng?',
				answer:
					'Các bệnh viện đối tác của chúng tôi sử dụng tiêu chuẩn là hệ thống vật liệu cấy ghép cột sống được chứng nhận quốc tế, với nâng cấp dụng cụ cao cấp theo yêu cầu và báo giá riêng.',
			},
			{
				question: 'Tôi có cần vật lý trị liệu sau can thiệp không?',
				answer:
					'Có, vật lý trị liệu bài bản tại bệnh viện bắt đầu ngay sau ca can thiệp, và bác sĩ phẫu thuật sẽ cung cấp chương trình bài tập tại nhà để tiếp tục hồi phục sau khi bạn về nước.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Gửi phim MRI hoặc X-quang cột sống của bạn qua biểu mẫu liên hệ, bạn sẽ nhận được đánh giá chuyên môn và ước tính chi phí minh bạch trong 24 giờ.',
			},
		],
	},

	'bariatric-surgery': {
		name: 'Phẫu thuật giảm béo',
		shortDescription: 'Cắt dạ dày hình ống, bắc cầu dạ dày và bóng dạ dày để giảm cân bền vững dưới sự giám sát y tế.',
		overview:
			'Các trung tâm giảm béo tại Ấn Độ kết hợp kinh nghiệm phẫu thuật nội soi với tư vấn dinh dưỡng bài bản trước và sau phẫu thuật, giúp bệnh nhân đạt được mức giảm cân bền vững, với thời gian nằm viện ngắn hơn và hồi phục nhanh hơn so với phẫu thuật mở.',
		procedures: ['Cắt dạ dày hình ống', 'Bắc cầu dạ dày', 'Bóng dạ dày'],
		benefits: [
			'Phẫu thuật giảm béo nội soi (xâm lấn tối thiểu) là tiêu chuẩn',
			'Tư vấn dinh dưỡng và lối sống bài bản, trước và sau phẫu thuật',
			'Thời gian nằm viện điển hình chỉ 2–3 ngày cho cắt dạ dày hình ống',
			'Hỗ trợ theo dõi dài hạn để giám sát tiến trình giảm cân',
		],
		flagshipProcedure: 'Cắt dạ dày hình ống nội soi',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '3–6 tuần', successRate: '90–95%' },
			{ country: 'Vương quốc Anh', waitTime: '6–12 tháng (NHS)', successRate: '90–95%' },
			{ country: 'Đức', waitTime: '4–8 tuần', successRate: '89–94%' },
			{ country: 'Thái Lan', waitTime: '1–3 tuần', successRate: '88–93%' },
			{ country: 'Ấn Độ', waitTime: '1–2 tuần', successRate: '92%+' },
		],
		inclusions: [
			'Đánh giá trước phẫu thuật, bao gồm nội soi và kiểm tra sức khỏe tổng quát',
			'Tư vấn với chuyên gia dinh dưỡng và lập kế hoạch ăn uống trước phẫu thuật',
			'Chi phí bác sĩ phẫu thuật và gây mê cho thủ thuật nội soi',
			'Chi phí phòng mổ và dụng cụ khâu nối/vật tư phẫu thuật tiêu chuẩn',
			'3 ngày nằm viện, bao gồm theo dõi sau phẫu thuật',
			'Tóm tắt xuất viện kèm kế hoạch tiến triển chế độ ăn sau phẫu thuật bài bản',
		],
		exclusions: [
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Phẫu thuật chỉnh sửa cho thủ thuật giảm béo trước đây được thực hiện ở nơi khác',
			'Phẫu thuật tạo hình để loại bỏ da thừa sau khi giảm cân đáng kể',
			'Thực phẩm bổ sung dinh dưỡng dài hạn ngoài bộ ban đầu khi xuất viện',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Phẫu thuật cắt dạ dày hình ống tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói cắt dạ dày hình ống nội soi tại Ấn Độ bắt đầu từ 4.500 USD, thấp hơn khoảng 80% so với Mỹ, bao gồm đánh giá trước phẫu thuật, ca can thiệp, thời gian nằm viện và kế hoạch ăn uống sau phẫu thuật.',
			},
			{
				question: 'Tôi có đủ điều kiện phẫu thuật giảm béo không?',
				answer:
					'Điều kiện thường được xác định dựa trên BMI và các bệnh lý liên quan — hãy chia sẻ chiều cao, cân nặng và bất kỳ tình trạng bệnh nào hiện có qua biểu mẫu liên hệ để được đội ngũ giảm béo của chúng tôi đánh giá điều kiện miễn phí.',
			},
			{
				question: 'Tôi có thể giảm được bao nhiêu cân?',
				answer:
					'Hầu hết bệnh nhân giảm 60–70% lượng cân dư sau 12–18 tháng kể từ khi cắt dạ dày hình ống hoặc bắc cầu, mặc dù kết quả thay đổi tùy theo thủ thuật được chọn và mức độ tuân thủ chế độ ăn và lối sống sau phẫu thuật.',
			},
			{
				question: 'Thời gian nằm viện và hồi phục kéo dài bao lâu?',
				answer:
					'Hầu hết bệnh nhân nằm viện khoảng 3 ngày và nên ở lại Ấn Độ 10–14 ngày để đội ngũ phẫu thuật có thể xác nhận quá trình hồi phục ban đầu trước khi về nước.',
			},
			{
				question: 'Thủ thuật có được thực hiện bằng nội soi không?',
				answer:
					'Có, cắt dạ dày hình ống, bắc cầu dạ dày và đặt bóng dạ dày đều được thực hiện bằng nội soi như tiêu chuẩn, thường có nghĩa là ít đau hơn và hồi phục nhanh hơn so với phẫu thuật mở.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ chiều cao, cân nặng và tiền sử bệnh của bạn qua biểu mẫu liên hệ, điều phối viên giảm béo của chúng tôi sẽ sắp xếp đánh giá chuyên môn trong 24 giờ.',
			},
		],
	},

	'nephrology-urology': {
		name: 'Thận học và tiết niệu',
		shortDescription: 'Điều trị sỏi thận, phẫu thuật tuyến tiền liệt và chăm sóc lọc máu bởi các đội ngũ tiết niệu chuyên khoa.',
		overview:
			'Các trung tâm tiết niệu và thận học tại Ấn Độ thực hiện các thủ thuật sỏi thận và tuyến tiền liệt với khối lượng lớn, sử dụng kỹ thuật laser và xâm lấn tối thiểu, mang đến cho bệnh nhân quốc tế cơ hội tiếp cận nhanh chóng với chuyên gia, không cần chờ đợi như thường thấy ở các nước khác.',
		procedures: ['Loại bỏ sỏi thận', 'Phẫu thuật tuyến tiền liệt', 'Chăm sóc lọc máu'],
		benefits: [
			'Loại bỏ sỏi thận bằng laser và xâm lấn tối thiểu (PCNL/RIRS)',
			'Phẫu thuật tuyến tiền liệt bằng robot và nội soi có sẵn tại các trung tâm hàng đầu',
			'Đơn vị lọc máu chuyên biệt cho bệnh nhân cần chăm sóc thận liên tục',
			'Xuất viện trong ngày hoặc ngày hôm sau cho nhiều thủ thuật xâm lấn tối thiểu',
		],
		flagshipProcedure: 'Lấy sỏi thận qua da (PCNL)',
		costComparison: [
			{ country: 'Hoa Kỳ', waitTime: '3–6 tuần', successRate: '92–96%' },
			{ country: 'Vương quốc Anh', waitTime: '3–9 tháng (NHS)', successRate: '92–96%' },
			{ country: 'Đức', waitTime: '3–6 tuần', successRate: '91–95%' },
			{ country: 'Thái Lan', waitTime: '1–3 tuần', successRate: '90–94%' },
			{ country: 'Ấn Độ', waitTime: '3–7 ngày', successRate: '94%+' },
		],
		inclusions: [
			'Đánh giá trước phẫu thuật, bao gồm siêu âm/CT và kiểm tra sức khỏe tổng quát',
			'Chi phí bác sĩ tiết niệu và gây mê cho thủ thuật',
			'Chi phí phòng mổ và thiết bị laser/nội soi',
			'2 ngày nằm viện, bao gồm theo dõi sau phẫu thuật',
			'Thuốc và vật tư tiêu chuẩn trong thời gian lưu trú',
			'Tóm tắt xuất viện kèm kế hoạch chẩn đoán hình ảnh theo dõi',
		],
		exclusions: [
			'Thời gian nằm viện vượt quá thời hạn của gói dịch vụ',
			'Điều trị sỏi hai bên (cả hai thận), nếu không được báo giá cùng nhau',
			'Các buổi lọc máu dài hạn ngoài thời gian lưu trú đánh giá ban đầu',
			'Thuốc mang về nhà ngoài bộ thuốc xuất viện tiêu chuẩn',
			'Điều trị các tình trạng không liên quan được phát hiện khi kiểm tra trước phẫu thuật',
			'Can thiệp lại do biến chứng không liên quan đến thủ thuật ban đầu',
		],
		faqs: [
			{
				question: 'Loại bỏ sỏi thận tại Ấn Độ có giá bao nhiêu?',
				answer:
					'Gói PCNL (loại bỏ sỏi thận) tại Ấn Độ bắt đầu từ 3.500 USD, thấp hơn khoảng 85% so với Mỹ, bao gồm đánh giá trước phẫu thuật, thủ thuật, thời gian nằm viện và chẩn đoán hình ảnh theo dõi.',
			},
			{
				question: 'Điều trị sỏi thận có xâm lấn tối thiểu không?',
				answer:
					'Có, hầu hết sỏi được điều trị bằng kỹ thuật laser xâm lấn tối thiểu, như PCNL hoặc RIRS, thường cho phép xuất viện trong 1–2 ngày, tùy theo kích thước và vị trí của sỏi.',
			},
			{
				question: 'Có phẫu thuật tuyến tiền liệt bằng robot không?',
				answer:
					'Có, một số bệnh viện đối tác của chúng tôi cung cấp phẫu thuật tuyến tiền liệt bằng robot và nội soi, có thể giảm mất máu và rút ngắn thời gian hồi phục so với phẫu thuật mở.',
			},
			{
				question: 'Tôi nên dự kiến ở lại Ấn Độ bao lâu?',
				answer:
					'Hầu hết các thủ thuật tiết niệu cần khoảng 7–10 ngày tại Ấn Độ cho đánh giá trước phẫu thuật, thủ thuật và một buổi tái khám trước khi về nước; các trường hợp phức tạp có thể cần thời gian lưu trú dài hơn.',
			},
			{
				question: 'Bạn có hỗ trợ bệnh nhân cần lọc máu liên tục không?',
				answer:
					'Có, các bệnh viện đối tác của chúng tôi có đơn vị lọc máu chuyên biệt và có thể điều phối chăm sóc thận liên tục cho bệnh nhân đi đánh giá hoặc đang chờ ghép thận.',
			},
			{
				question: 'Tôi bắt đầu như thế nào?',
				answer:
					'Chia sẻ báo cáo chẩn đoán hình ảnh (siêu âm/CT) của bạn qua biểu mẫu liên hệ, điều phối viên tiết niệu của chúng tôi sẽ sắp xếp đánh giá chuyên môn và báo giá minh bạch trong 24 giờ.',
			},
		],
	},
};

export const getViTreatment = (slug: string) => viTreatments[slug];
