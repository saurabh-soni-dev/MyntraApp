import React, { FC, useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';

type Props = {
  visible: boolean;
  onClose: () => void;
  categories: string[];
  filters: any;
  setFilters: (f: any) => void;
  clearFilters: () => void;
};

const FilterModal: FC<Props> = ({
  visible,
  onClose,
  categories,
  filters,
  setFilters,
  clearFilters,
}) => {
  const [local, setLocal] = useState({
    category: filters?.category || null,
    minPrice: filters?.minPrice ?? null,
    maxPrice: filters?.maxPrice ?? null,
    sortBy: filters?.sortBy ?? null,
  });

  const apply = () => {
    setFilters({
      category: local.category,
      minPrice: local.minPrice ? Number(local.minPrice) : null,
      maxPrice: local.maxPrice ? Number(local.maxPrice) : null,
      sortBy: local.sortBy,
    });
    onClose();
  };

  const clear = () => {
    setLocal({ category: null, minPrice: null, maxPrice: null, sortBy: null });
    clearFilters();
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: moderateScale(12),
            borderTopRightRadius: moderateScale(12),
            maxHeight: '70%',
            padding: scale(16),
          }}
        >
          <Text style={{ fontSize: moderateScale(16), fontWeight: '700' }}>
            Filters
          </Text>

          <ScrollView style={{ marginTop: verticalScale(12) }}>
            <Text style={{ fontWeight: '600', marginBottom: verticalScale(8) }}>
              Category
            </Text>
            {categories.map(cat => (
              <TouchableOpacity
                key={cat}
                onPress={() =>
                  setLocal(s => ({
                    ...s,
                    category: s.category === cat ? null : cat,
                  }))
                }
                style={{
                  paddingVertical: verticalScale(8),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text>{cat}</Text>
                <Text>{local.category === cat ? '✓' : ''}</Text>
              </TouchableOpacity>
            ))}

            <Text style={{ fontWeight: '600', marginTop: verticalScale(12) }}>
              Price Range
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: scale(8),
                marginTop: verticalScale(8),
              }}
            >
              <TextInput
                placeholder="Min"
                keyboardType="numeric"
                value={local.minPrice?.toString() ?? ''}
                onChangeText={t =>
                  setLocal(s => ({ ...s, minPrice: t ? Number(t) : null }))
                }
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: '#eee',
                  padding: scale(8),
                  borderRadius: moderateScale(6),
                }}
              />
              <TextInput
                placeholder="Max"
                keyboardType="numeric"
                value={local.maxPrice?.toString() ?? ''}
                onChangeText={t =>
                  setLocal(s => ({ ...s, maxPrice: t ? Number(t) : null }))
                }
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: '#eee',
                  padding: scale(8),
                  borderRadius: moderateScale(6),
                }}
              />
            </View>

            <Text style={{ fontWeight: '600', marginTop: verticalScale(12) }}>
              Sort By
            </Text>
            <TouchableOpacity
              onPress={() =>
                setLocal(s => ({
                  ...s,
                  sortBy: s.sortBy === 'price_asc' ? null : 'price_asc',
                }))
              }
              style={{ paddingVertical: verticalScale(8) }}
            >
              <Text>
                Price - Low to High {local.sortBy === 'price_asc' ? '✓' : ''}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setLocal(s => ({
                  ...s,
                  sortBy: s.sortBy === 'price_desc' ? null : 'price_desc',
                }))
              }
              style={{ paddingVertical: verticalScale(8) }}
            >
              <Text>
                Price - High to Low {local.sortBy === 'price_desc' ? '✓' : ''}
              </Text>
            </TouchableOpacity>
          </ScrollView>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: verticalScale(12),
            }}
          >
            <TouchableOpacity onPress={clear} style={{ padding: scale(10) }}>
              <Text style={{ color: '#666' }}>Clear</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={onClose}
                style={{ padding: scale(10), marginRight: scale(8) }}
              >
                <Text style={{ color: '#666' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={apply}
                style={{
                  backgroundColor: '#ff4081',
                  paddingVertical: verticalScale(10),
                  paddingHorizontal: scale(12),
                  borderRadius: moderateScale(8),
                }}
              >
                <Text style={{ color: '#fff', fontWeight: '700' }}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
