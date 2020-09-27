package jp.co.sample;

import jp.co.sample.common.BaseEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SkjEntity extends BaseEntity{

	private String user_id;

	private String year;

	private String month;

	private String day;

	private String from_time;

	private String skj_info;

	public SkjEntity() {
		super("skj", "");
		// TODO 自動生成されたコンストラクター・スタブ
	}

}
